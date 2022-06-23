import { CopyIcon, StarIcon } from "~/components/Icons"
import connectDb from "~/db/connectDb.server"
import { useAccount } from "~/hooks/useAccount"
import { useNotification } from "~/hooks/useNotifcation"
import { useEffect, useState } from "react"
import Highlight from "react-highlight"
import { Link } from "react-router-dom"
import { Form, json, redirect, useCatch, useLoaderData, useParams } from "remix"

import { getUserSession } from "../../../sessions.server"

export async function loader({ params, request }) {
    const session = await getUserSession(request.headers.get("Cookie"))
    const userId = session.get("userId")
    const db = await connectDb()
    const snippet = await db.models.Snippet.findById(params.snippetId)
    const user = await db.models.user.findById(userId)
    if (!snippet) {
        throw new Response(
            `Couldn't find snippet with id: ${params.snippetId}`,
            {
                status: 404,
            }
        )
    }

    const isFavorite = user?.favoriteSnippets.includes(snippet.id)

    return json({
        snippet: snippet,
        userId: userId,
        user: user ? user : null,
        isFavorite,
    })
}

export async function action({ request, params }) {
    const session = await getUserSession(request.headers.get("Cookie"))
    const form = await request.formData()
    const _action = form.get("_action")
    const snippetId = form.get("snippetId")
    const db = await connectDb()
    const userId = session.get("userId")
    const snippet = await db.models.Snippet.findById(params.snippetId)
    const user = await db.models.user.findById(userId)

    switch (_action) {
        case "favoriteToggle":
            // const mappedFavorites = user?.favoriteSnippets.map((fav) => fav)
            if (user?.favoriteSnippets.includes(snippet.id)) {
                await db.models.user.updateOne(
                    { _id: userId },
                    {
                        $pull: { favoriteSnippets: snippet.id },
                    }
                )

                return null
            } else {
                await db.models.user.updateOne(
                    { _id: userId },
                    {
                        $addToSet: { favoriteSnippets: snippet.id },
                    }
                )
                return null
            }

        case "delete":
            await db.models.Snippet.deleteOne({ _id: snippetId })
            return redirect("/snippets/snippet")
    }
}

export default function SnippetPage() {
    const { snippet, userId, user, isFavorite } = useLoaderData()
    const [subs, setSub] = useState(false)
    const dateAdded = new Date(snippet.dateAdded)
    const displayDate = dateAdded.toLocaleDateString("da-DK", {
        dateStyle: "long",
    })
    const [copyState, setCopyState] = useState(false)
    const languageTag = useParams().snippetTag
    const loggedIn = useAccount()
    const notiDenied = useNotification()

    useEffect(() => {
        setCopyState(true)
        async function checkSub() {
            const registration = await navigator.serviceWorker.getRegistration()
            let subscription = await registration?.pushManager.getSubscription()
            const mappedEndpoints = user?.subscription.map(
                (sub) => sub.endpoint
            )

            if (
                snippet.subscribers.includes(userId) &&
                mappedEndpoints.includes(subscription?.endpoint)
            ) {
                setSub(true)
            }
        }
        checkSub()
    }, [snippet.subscribers])

    async function unSubToSnip() {
        const SERVER_URL = `${location.origin}/unSubscriptionService`
        try {
            fetch(SERVER_URL, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    snippetId: snippet._id,
                    userId: userId,
                }),
            })
            setSub(false)
        } catch (err) {
            console.log("Error", err)
            return null
        }
    }

    async function subToSnip() {
        const SERVER_URL = `${location.origin}/subscriptionService`

        try {
            const registration = await navigator.serviceWorker.getRegistration()
            let subscription = await registration.pushManager.getSubscription()
            const VAPID_PUBLIC_KEY =
                "BEApaM42xO4ckE_i6WH0SPyfAXWPtZJncv4d_foykgnhTGMaLsbmXOWdldaj7YTy4NJIzPdq4jO6Jl2lME_fg_E"
            const options = {
                applicationServerKey: VAPID_PUBLIC_KEY,
                userVisibleOnly: true,
            }
            if (!subscription) {
                subscription = await registration.pushManager.subscribe(options)
            }

            fetch(SERVER_URL, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    subscription,
                    snippetId: snippet._id,
                    userId: userId,
                }),
            })
            setSub(true)
        } catch (err) {
            console.log("Error", err)
            return null
        }
    }

    return (
        <div className="mt-4 overflow-y-scroll h-4/5 md:h-full md:pb-10 scrollbar-hide flex-shrink basis-4/6 ">
            <div className="flex flex-wrap  items-center">
                <h1 className="text-4xl font-bold w-full">{snippet.title}</h1>
                <div className="my-2 flex gap-5 dark:text-gray-400 w-full">
                    <p>Date: {displayDate}</p>
                    <p>Language: {snippet.languageTag}</p>
                </div>

                <Form
                    method="post"
                    className=" flex items-center h-fit bg-blue-800 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg px-2 py-1"
                >
                    <input type="hidden" name="snippetId" value={snippet._id} />
                    <input
                        type="hidden"
                        name="_action"
                        value="favoriteToggle"
                    />
                    <input type="hidden" name="isFavorite" value={isFavorite} />
                    <button
                        type="submit"
                        name="toggleFavorite"
                        title="Toggle Favorite"
                    >
                        <StarIcon
                            fill={isFavorite}
                            className="w-6 h-6 stroke-yellow-500"
                        />
                    </button>
                </Form>

                {snippet.userId == userId ? (
                    <Link
                        className=" hover:bg-blue-600 bg-blue-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700 ml-4 rounded-lg px-2 py-1"
                        to={`/snippets/${languageTag}/${snippet._id}/update`}
                    >
                        Update Snippet
                    </Link>
                ) : null}

                {snippet.userId == userId ? (
                    <Form
                        method="post"
                        className="bg-red-700 hover:bg-red-500 ml-4 rounded-lg px-2 py-1"
                    >
                        <input
                            type="hidden"
                            name="snippetId"
                            value={snippet._id}
                        />
                        <input type="hidden" name="_action" value="delete" />
                        <button
                            className="text-white"
                            type="submit"
                            name="deleteSnippet"
                            title="Delete Snippet"
                        >
                            Delete
                        </button>
                    </Form>
                ) : null}

                {loggedIn && notiDenied && (
                    <>
                        {subs ? (
                            <button
                                className=" text-white ml-4 flex items-center h-fit bg-blue-800 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg px-2 py-1"
                                onClick={unSubToSnip}
                                name="unsubscribeToSnippet"
                                title="Unsubscribe To Snippet"
                            >
                                Unsubscribe to snippet
                            </button>
                        ) : (
                            <button
                                className="text-white ml-4 flex items-center h-fit bg-blue-800 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg px-2 py-1"
                                onClick={subToSnip}
                                name="subscribeToSnippet"
                                title="Subscribe To Snippet"
                            >
                                Subscribe to snippet
                            </button>
                        )}
                    </>
                )}
            </div>

            <h2 className=" mt-2 text-xl font-semibold">Description</h2>
            <p>{snippet.description}</p>
            <h2 className=" text-xl font-semibold mt-4 mb-2">Snippet</h2>
            <div className="relative">
                {copyState ? (
                    <button
                        name="copyToClipboard"
                        title="Copy to clipboard"
                        onClick={(e) => {
                            navigator.clipboard.writeText(snippet.snippet)
                        }}
                        className=" absolute  right-0 p-3 group"
                    >
                        <div className="flex text-sm items-center ">
                            <p className=" hidden group-hover:block text-gray-300 group-active:hidden mr-1 bg-gray-600 rounded-lg px-2 ">
                                Copy to clipboard
                            </p>
                            <CopyIcon />
                        </div>
                    </button>
                ) : null}

                <Highlight
                    className={`${snippet.languageTag.toLowerCase()}+ rounded-lg scrollbar-hide`}
                >
                    {snippet.snippet}
                </Highlight>
            </div>
        </div>
    )
}

export function CatchBoundary() {
    const caught = useCatch()
    return (
        <div>
            <h1>
                {caught.status} {caught.statusText}
            </h1>
            <h2>{caught.data}</h2>
        </div>
    )
}

export function ErrorBoundary({ error }) {
    return (
        <h1 className="text-red-500 font-bold">
            {error.name}: {error.message}
        </h1>
    )
}
