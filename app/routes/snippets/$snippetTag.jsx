import { Outlet, useSubmit } from "@remix-run/react"
import { SearchIcon } from "~/components/Icons"
import SnippetListItem from "~/components/SnippetListItem"
import connectDb from "~/db/connectDb.server.js"
import { getUserSession, requireUserSession } from "~/sessions.server"
import { Form, useLoaderData, useParams } from "remix"

export async function loader({ params, request }) {
    const db = await connectDb()
    const session = await getUserSession(request.headers.get("Cookie"))
    const userId = session.get("userId")
    const user = await db.models.user.findById(userId)

    const url = new URL(request.url)
    const title = url.searchParams.get("title")
    const sort = url.searchParams.get("sort")
    const languageTag = params.snippetTag
    console.info(sort)
    const sharedQuery = { $or: [{ visibility: true }, { userId }] }

    //const favorites = user?.favoriteSnippets.includes(snippet.id)

    // Find all public and private snippets that matches with userID
    // if user is not logged in, only public snippets are shown, e.g userId resolves to undefined
    if (languageTag === "all")
        return {
            snippets: await db.models.Snippet.find(
                title
                    ? {
                          $and: [
                              sharedQuery,
                              {
                                  title: { $regex: new RegExp(title, "i") },
                              },
                              {
                                  _id: { $in: user.favoriteSnippets },
                              },
                          ],
                      }
                    : sharedQuery
            ).sort({ [sort]: -1 }),
            user: user,
        }
    if (languageTag === "favorites")
        return {
            snippets: await db.models.Snippet.find(
                title
                    ? {
                          $and: [
                              sharedQuery,
                              {
                                  title: { $regex: new RegExp(title, "i") },
                              },
                              {
                                  _id: { $in: user.favoriteSnippets },
                              },
                          ],
                      }
                    : {
                          $and: [
                              sharedQuery,
                              {
                                  _id: { $in: user.favoriteSnippets },
                              },
                          ],
                      }
            ).sort({ [sort]: -1 }),
            user: user,
        }

    if (languageTag === "mysnippets") {
        requireUserSession(request)
        return {
            snippets: await db.models.Snippet.find(
                title
                    ? {
                          title: { $regex: new RegExp(title, "i") },
                          userId: userId,
                      }
                    : {
                          userId: userId,
                      }
            ).sort({ [sort]: -1 }),
            user: user,
        }
    }
    // Search in selected snippet languages,
    return {
        snippets: await db.models.Snippet.find(
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
        ).sort({ [sort]: -1 }),
        user: user,
    }
}

export default function Index() {
    const loaderData = useLoaderData() || {}
    console.log(loaderData.snippets)
    const submit = useSubmit()
    const languageTag = useParams().snippetTag

    function handleChange(event) {
        submit(event.currentTarget, { replace: true })
    }

    return (
        <>
            <div className="border-b md:dark:border-gray-700 mb-4 pb-2 ">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold capitalize">
                        {languageTag === "mysnippets"
                            ? "My snippets"
                            : `${languageTag} Snippets`}
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
                    <button type="submit" title="Search">
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
                        <option value="createdAt">Date added</option>
                    </select>
                    <button
                        className="ml-3 dark:bg-gray-800 dark:hover:bg-gray-700 px-3 rounded-lg py-1 bg-blue-800 hover:bg-blue-600 text-white "
                        type="submit"
                        title="Sort"
                    >
                        Sort snippets
                    </button>
                </Form>
            </div>
            <div className="lg:flex gap-8">
                <div className="my-8 overflow-y-scroll scrollbar-hide lg:max-w-sm basis-1/6 flex-grow">
                    <ul className="list-none gap-1 flex flex-shrink-0 flex-nowrap  md:flex-col">
                        {loaderData?.snippets.map((snippet) => (
                            <SnippetListItem
                                key={snippet._id}
                                snippet={snippet}
                                isFavorite={loaderData.user?.favoriteSnippets.includes(
                                    snippet._id
                                )}
                                languageTag={languageTag}
                            />
                        ))}

                        {loaderData?.snippets.length === 0 && (
                            <h2>No snippets found at all</h2>
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
