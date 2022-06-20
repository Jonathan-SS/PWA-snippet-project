import connectDb from "~/db/connectDb.server"
import { getUserSession } from "~/sessions.server"
import {
    Form,
    json,
    redirect,
    useActionData,
    useCatch,
    useLoaderData,
    useSubmit,
} from "remix"

export async function loader({ params, request }) {
    const db = await connectDb()
    const snippet = await db.models.Snippet.findById(params.snippetId)
    if (!snippet) {
        throw new Response(
            `Couldn't find snippet with id ${params.snippetId}`,
            {
                status: 404,
            }
        )
    }

    const snippetId = snippet.userId
    const session = await getUserSession(request.headers.get("Cookie"))
    const userId = session.get("userId")

    if (snippetId != userId) {
        throw new Response(`You don't own this snippetpage ${params.bookId}`, {
            status: 403,
        })
    }

    return json(snippet)
}

export async function action({ request }) {
    const form = await request.formData()

    const title = form.get("title")
    const languageTag = form.get("languageTag")
    const description = form.get("description")
    const snippet = form.get("snippet")
    const snippetId = form.get("snippetId")
    const db = await connectDb()

    try {
        const test = await db.models.Snippet.findOneAndUpdate(
            { _id: snippetId },
            {
                $set: {
                    title: title,
                    languageTag: languageTag,
                    description: description,
                    snippet: snippet,
                },
                $currentDate: { lastModified: true },
            }
        )

        const subs = await db.models.Snippet.findById(snippetId).select({
            subscribers: 1,
            _id: 0,
        })

        const url = new URL(request.url)

        // Sent push notification, snippet has been updated
        const testFetch = await fetch(`${url.origin}/notificationService`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                push: {
                    title: ` A snippet you subscribe to has been updated`,
                    body: `Click to see the latest changes on the snippet: ${title}`,
                    href: `/snippets/all/${snippetId}`,
                    image: "/snippie.png",
                },
                subs: subs,
            }),
        })

        return redirect(`/snippets/mysnippets/${snippetId}`)
    } catch (error) {
        return json(
            { errors: error.errors, values: Object.fromEntries(form) },
            { status: 400 }
        )
    }
}

export default function CreateSnippet() {
    const actionData = useActionData()

    const snippetToUpdate = useLoaderData()
    return (
        <div className="mt-4 overflow-y-scroll h-4/5 md:h-full md:pb-10 scrollbar-hide flex-shrink basis-4/6 ">
            <h1 className="text-4xl font-bold mb-2  mr-2">Update snippet</h1>
            <Form method="post">
                <label htmlFor="title" className="block text-xl font-semibold">
                    Title
                </label>
                {actionData && actionData.errors?.title && (
                    <p className="text-red-500">
                        {actionData?.errors.title.message}
                    </p>
                )}
                <input
                    type="text"
                    name="title"
                    defaultValue={snippetToUpdate.title}
                    style={{ width: "66%" }}
                    id="title"
                    className={
                        actionData && actionData.errors?.title
                            ? "border-2 border-red-500 rounded-lg px-2 bg-blue-600 text-white dark:text-black dark:bg-gray-700"
                            : " rounded-lg px-2 bg-blue-600 text-white   dark:bg-gray-700"
                    }
                />

                <label
                    htmlFor="languageTag"
                    className="block mt-3 text-xl font-semibold"
                >
                    Language
                </label>
                <select
                    defaultValue={snippetToUpdate.languageTag}
                    name="languageTag"
                    className=" bg-blue-600 text-white   dark:bg-gray-700"
                >
                    <option value="JavaScript">JavaScript</option>
                    <option value="TypeScript">TypeScript</option>
                    <option value="PHP">PHP</option>
                    <option value="CSS">CSS</option>
                    <option value="HTML">HTML</option>
                    <option value="java">Java</option>
                    <option value="ruby">Ruby</option>
                    <option value="haskel">Haskel</option>
                    <option value="coffeescript">CoffeeScript</option>
                    <option value="haskell">Haskell</option>
                    <option value="kotlin">Kotlin</option>
                    <option value="dart">Dart</option>
                    <option value="lua">Lua</option>
                    <option value="go">Go</option>
                    <option value="shell">Shell</option>
                    <option value="sql">SQL</option>
                    <option value="perl">Perl</option>
                    <option value="swift">Swift</option>
                    <option value="cs">C#</option>
                    <option value="c++">C++</option>
                    <option value="python">Python</option>
                </select>
                <label
                    htmlFor="description"
                    className="block mt-3 text-xl font-semibold"
                >
                    Description
                </label>

                <textarea
                    name="description"
                    style={{ height: "100px", width: "66%" }}
                    defaultValue={snippetToUpdate.description}
                    id="description"
                    className={
                        actionData && actionData.errors?.description
                            ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black "
                            : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white  "
                    }
                />
                {actionData?.description && (
                    <p className="text-red-500">
                        {actionData?.errors.description.message}
                    </p>
                )}

                <label
                    htmlFor="snippet"
                    className="block mt-3 text-xl font-semibold"
                >
                    Snippet
                </label>

                <textarea
                    name="snippet"
                    defaultValue={snippetToUpdate.snippet}
                    id="snippet"
                    style={{ height: "200px", width: "66%" }}
                    className={
                        actionData && actionData.errors?.description
                            ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black "
                            : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white "
                    }
                />
                {actionData && actionData.errors?.description && (
                    <p className="text-red-500">
                        {actionData?.errors.description.message}
                    </p>
                )}
                <br />
                <input
                    type="hidden"
                    name="snippetId"
                    value={snippetToUpdate._id}
                />
                <button
                    type="submit"
                    className=" dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg mt-3 text-xl font-semibold hover:bg-blue-600 bg-blue-800 text-white  "
                >
                    Save snippet
                </button>
            </Form>
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
