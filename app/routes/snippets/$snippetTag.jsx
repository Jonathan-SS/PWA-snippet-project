import { Outlet, useActionData } from "@remix-run/react"
import { SearchIcon } from "~/components/Icons"
import SnippetListItem from "~/components/SnippetListItem"
import connectDb from "~/db/connectDb.server.js"
import { Form, useLoaderData, useParams } from "remix"
import { getUserSession } from "~/sessions.server"

export async function loader({ params, request }) {
    const db = await connectDb()
    const session = await getUserSession(request.headers.get("Cookie"))
    const userId = session.get("userId")

    if (params.snippetTag === "all") {
        return await db.models.Snippet.find({
            visibility: true,
        })
    }
    if (params.snippetTag === "mysnippets") {
        return await db.models.Snippet.find({
            userId: userId,
        })
    }

    return await db.models.Snippet.find({
        languageTag: params.snippetTag,
        visibility: true,
    })
}

export async function action({ request, params }) {
    const language = String(params.snippetTag)
    const form = await request.formData()
    const _action = form.get("_action")
    const db = await connectDb()
    switch (_action) {
        case "search":
            const query = form.get("searchQuery")
            const searchSnippets = await db.models.Snippet.find({
                title: { $regex: new RegExp(query, "i") },
                visibility: true,
            })

            return searchSnippets

        case "sort":
            const sortMethod = form.get("sortMethod")
            let snippets = []

            if (sortMethod === "updated") {
                if (!(language === "all")) {
                    snippets = await db.models.Snippet.find({
                        visibility: true,
                        languageTag: language,
                    }).sort({
                        lastModified: 1,
                    })
                } else {
                    snippets = await db.models.Snippet.find({
                        visibility: true,
                    }).sort({
                        lastModified: 1,
                    })
                }
            } else if (sortMethod === "added") {
                if (!(language === "all")) {
                    snippets = await db.models.Snippet.find({
                        visibility: true,
                        languageTag: language,
                    }).sort({
                        dateAdded: 1,
                    })
                } else {
                    snippets = await db.models.Snippet.find({
                        visibility: true,
                    }).sort({
                        dateAdded: 1,
                    })
                }
            } else if (sortMethod === "title") {
                if (!(language === "all")) {
                    snippets = await db.models.Snippet.find({
                        visibility: true,
                        languageTag: language,
                    }).sort({
                        title: 1,
                    })
                } else {
                    snippets = await db.models.Snippet.find({
                        visibility: true,
                    }).sort({
                        title: 1,
                    })
                }
            } else if (sortMethod === "favorites") {
                if (!(language === "all")) {
                    snippets = await db.models.Snippet.find({
                        visibility: true,
                        languageTag: language,
                        favorite: 1,
                    })
                } else {
                    snippets = await db.models.Snippet.find({
                        visibility: true,
                        favorite: 1,
                    })
                }
            }

            return snippets
    }
}

export default function Index() {
    const snippets = useLoaderData()
    const actionSnippets = useActionData()
    const languageTag = useParams().snippetTag

    console.log(languageTag)

    return (
        <>
            <div className="border-b md:dark:border-gray-700 mb-4 pb-2 ">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                        {languageTag} Snippets
                    </h1>
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
