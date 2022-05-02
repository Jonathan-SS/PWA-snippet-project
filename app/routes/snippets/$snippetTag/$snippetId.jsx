import { CopyIcon, StarIcon } from "~/components/Icons"
import connectDb from "~/db/connectDb.server.js"
import { useEffect, useState } from "react"
import Highlight from "react-highlight"
import { Link } from "react-router-dom"
import { Form, json, redirect, useCatch, useLoaderData, useParams } from "remix"

export async function loader({ params }) {
    const db = await connectDb()
    const snippet = await db.models.Snippet.findById(params.snippetId)
    if (!snippet) {
        throw new Response(
            `Couldn't find snippets with id ${params.snippetId}`,
            {
                status: 404,
            }
        )
    }
    return json(snippet)
}

export async function action({ request }) {
    const form = await request.formData()
    const _action = form.get("_action")
    const snippetId = form.get("snippetId")
    const db = await connectDb()

    switch (_action) {
        case "favoriteToggle":
            const isFavortie = form.get("isFavorite")
            if (isFavortie === "true") {
                await db.models.Snippet.updateOne(
                    { _id: snippetId },
                    {
                        $set: { favorite: false },
                    }
                )

                return null
            }
            if (isFavortie === "false") {
                await db.models.Snippet.updateOne(
                    { _id: snippetId },
                    {
                        $set: { favorite: true },
                    }
                )

                return null
            }
        case "delete":
            await db.models.Snippet.deleteOne({ _id: snippetId })
            return redirect("/snippets/snippet")
    }
}

export default function BookPage() {
    const snippet = useLoaderData()
    const dateAdded = new Date(snippet.dateAdded)
    const displayDate = dateAdded.toLocaleDateString("da-DK", {
        dateStyle: "long",
    })
    const [copyState, setCopyState] = useState(false)
    const languageTag = useParams().snippetTag

    useEffect(() => {
        setCopyState(true)
    }, [])

    return (
        <div className="mt-4 overflow-y-scroll h-4/5 md:h-full md:pb-10 scrollbar-hide flex-shrink basis-4/5 ">
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
                    <input
                        type="hidden"
                        name="isFavorite"
                        value={snippet.favorite}
                    />
                    <button type="submit">
                        <StarIcon
                            fill={snippet.favorite}
                            className="w-6 h-6 stroke-yellow-500"
                        />
                    </button>
                </Form>
                <Link
                    className=" hover:bg-blue-600 bg-blue-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700 ml-4 rounded-lg px-2 py-1"
                    to={`/snippets/${languageTag}/${snippet._id}/update`}
                >
                    Update Snippet
                </Link>
                <Form
                    method="post"
                    className="bg-red-700 hover:bg-red-500 ml-4 rounded-lg px-2 py-1"
                >
                    <input type="hidden" name="snippetId" value={snippet._id} />
                    <input type="hidden" name="_action" value="delete" />
                    <button className=" text-white" type="submit">
                        Delete
                    </button>
                </Form>
            </div>

            <h2 className=" mt-2 text-xl font-semibold">Description</h2>
            <p>{snippet.description}</p>
            <h2 className=" text-xl font-semibold mt-4 mb-2">Snippet</h2>
            <div className="relative">
                {copyState ? (
                    <button
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
