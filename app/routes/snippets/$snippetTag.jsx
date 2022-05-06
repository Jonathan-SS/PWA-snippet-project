import { Outlet, useSubmit } from "@remix-run/react"
import { SearchIcon } from "~/components/Icons"
import SnippetListItem from "~/components/SnippetListItem"
import connectDb from "~/db/connectDb.server.js"
import { getUserSession } from "~/sessions.server"
import { Form, useLoaderData, useParams } from "remix"

export async function loader({ params, request }) {
    const db = await connectDb()
    const session = await getUserSession(request.headers.get("Cookie"))
    const userId = session.get("userId")

    const url = new URL(request.url)
    const title = url.searchParams.get("title")
    const sort = url.searchParams.get("sort")
    const languageTag = params.snippetTag

    const sharedQuery = { $or: [{ visibility: true }, { userId }] }

    // Find all public and private snippets that matches with userID
    // if user is not logged in, only public snippets are shown, e.g userId resolves to undefined
    if (languageTag === "all")
        return await db.models.Snippet.find(
            title
                ? {
                      $and: [
                          sharedQuery,
                          {
                              title: { $regex: new RegExp(title, "i") },
                          },
                      ],
                  }
                : sharedQuery
        ).sort({ [sort]: -1 })

    // Search in selected snippet languages,
    return await db.models.Snippet.find(
        title
            ? {
                  $and: [
                      sharedQuery,
                      {
                          title: { $regex: new RegExp(title, "i") },
                          languageTag,
                      },
                  ],
              }
            : { ...sharedQuery, languageTag }
    ).sort({ [sort]: -1 })
}

export default function Index() {
    const snippets = useLoaderData() || []
    console.log("snippets: ", snippets)
    const submit = useSubmit()
    const languageTag = useParams().snippetTag

    function handleChange(event) {
        submit(event.currentTarget, { replace: true })
    }

    return (
        <>
            <div className="border-b md:dark:border-gray-700 mb-4 pb-2 ">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                        {languageTag} Snippets
                    </h1>
                </div>

                <Form
                    method="get"
                    onChange={handleChange}
                    className="flex my-2"
                >
                    <input
                        className="rounded px-1 border-b-slate-400 dark:border-none dark:text-gray-800 mr-2"
                        type="search"
                        name="title"
                        placeholder="Search snippets..."
                    />
                    <button type="submit">
                        <SearchIcon />
                    </button>
                </Form>
                <Form method="get" onChange={handleChange}>
                    <select
                        name="sort"
                        className="dark:text-gray-800 rounded-lg"
                    >
                        <option value="updatedAt">Last updated</option>
                        <option value="title">Title</option>
                        <option value="favorite">Favorites</option>
                        <option value="createdAt">Date added</option>
                    </select>
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
                        {snippets.map((snippet) => (
                            <SnippetListItem
                                key={snippet._id}
                                snippet={snippet}
                                languageTag={languageTag}
                            />
                        ))}

                        {snippets.length === 0 && <h2>No snippets found</h2>}
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
