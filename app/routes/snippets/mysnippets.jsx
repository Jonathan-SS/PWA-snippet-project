import { Outlet, useActionData } from "@remix-run/react"
import { useLoaderData, Form, useParams } from "remix"
import { SearchIcon } from "~/components/Icons"
import SnippetListItem from "~/components/SnippetListItem"
import connectDb from "~/db/connectDb.server.js"
import { requireUserSession, getUserSession } from "../../sessions.server.js"

export async function loader({ request }) {
    await requireUserSession(request)
    const db = await connectDb()
    const session = await getUserSession(request.headers.get("Cookie"))
    const userId = session.get("userId")

    return await db.models.Snippet.find({
        userId: userId,
    })
}

export async function action({ request }) {
    const form = await request.formData()
    const _action = form.get("_action")
    const session = await getUserSession(request.headers.get("Cookie"))
    const db = await connectDb()
    const userId = session.get("userId")
    switch (_action) {
        case "search":
            const query = form.get("searchQuery")
            const searchSnippets = await db.models.Snippet.find({
                userId: userId,
                title: { $regex: new RegExp(query, "i") },
            })

            return searchSnippets

        case "sort":
            const sortMethod = form.get("sortMethod")
            let snippets = []

            if (sortMethod === "updated") {
                snippets = await db.models.Snippet.find({
                    userId: userId,
                }).sort({
                    lastModified: 1,
                })
            } else if (sortMethod === "added") {
                snippets = await db.models.Snippet.find({
                    userId: userId,
                }).sort({
                    dateAdded: 1,
                })
            } else if (sortMethod === "title") {
                snippets = await db.models.Snippet.find({
                    userId: userId,
                }).sort({
                    title: 1,
                })
            } else if (sortMethod === "favorites") {
                snippets = await db.models.Snippet.find({
                    userId: userId,
                    favorite: 1,
                })
            } else {
                snippets = await db.models.Snippet.find({
                    userId: userId,
                })
            }
            return snippets
    }
}
export default function MySnippets() {
    const snippets = useLoaderData()
    const actionSnippets = useActionData()
    const languageTag = "mysnippets"

    return (
        <>
            <div className="border-b md:dark:border-gray-700 mb-4 pb-2 ">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">My snippets</h1>
                </div>

                <Form method="post" className="flex my-2">
                    <input
                        className="rounded px-1 border-b-slate-400 dark:border-none dark:text-gray-800 mr-2"
                        type="text"
                        name="searchQuery"
                        placeholder="Search snippets..."
                    />
                    <input type="hidden" name="_action" value="search" />
                    <button type="submit">
                        <SearchIcon />
                    </button>
                </Form>
                <Form method="post">
                    <select
                        name="sortMethod"
                        className="dark:text-gray-800 rounded-lg"
                    >
                        <option value="all">All my snippets</option>
                        <option value="updated">Last updated</option>
                        <option value="title">Title</option>
                        <option value="favorites">Favorites</option>
                        <option value="added">Date added</option>
                    </select>
                    <input type="hidden" name="_action" value="sort" />
                    <button
                        className="ml-3 dark:bg-gray-800 dark:hover:bg-gray-700 px-3 rounded-lg py-1 bg-blue-800 hover:bg-blue-600 text-white "
                        type="submit"
                    >
                        Sort
                    </button>
                </Form>
            </div>
            <div className="lg:flex gap-8">
                <div className="my-8 overflow-y-scroll scrollbar-hide min-w-[200px] lg:max-w-sm basis-1/5 flex-grow">
                    <ul className="list-none gap-1 flex flex-shrink-0 flex-nowrap  md:flex-col">
                        {actionSnippets
                            ? actionSnippets.map((snippet) => (
                                  <SnippetListItem
                                      key={snippet._id}
                                      snippet={snippet}
                                  />
                              ))
                            : snippets.map((snippet) => (
                                  <SnippetListItem
                                      key={snippet._id}
                                      snippet={snippet}
                                      languageTag={languageTag}
                                  />
                              ))}

                        {!actionSnippets && snippets.length === 0 && (
                            <h2>No snippets found</h2>
                        )}
                    </ul>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export function ErrorBoundary({ error }) {
    return (
        <h1 className="text-red-500 font-bold">
            {error.name}: {error.message}
        </h1>
    )
}
