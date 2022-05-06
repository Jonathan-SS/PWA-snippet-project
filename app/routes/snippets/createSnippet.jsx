import connectDb from "~/db/connectDb.server"
import { useEffect } from "react"
import { Form, json, redirect, useActionData } from "remix"
import { requireUserSession, getUserSession } from "../../sessions.server"

export async function loader({ request }) {
    await requireUserSession(request)
    return null
}

export async function action({ request }) {
    const form = await request.formData()
    const title = form.get("title")
    const languageTag = form.get("languageTag")
    const description = form.get("description")
    const snippet = form.get("snippet")
    const visibility = form.get("visibility")
    const db = await connectDb()
    const session = await getUserSession(request.headers.get("Cookie"))

    try {
        const newSnippet = await db.models.Snippet.create({
            title,
            languageTag,
            description,
            snippet,
            visibility,
            userId: session.get("userId"),
        })
        return redirect(`/snippets/snippet/${newSnippet._id}`)
    } catch (error) {
        return json(
            { errors: error.errors, values: Object.fromEntries(form) },
            { status: 400 }
        )
    }
}

export default function CreateSnippet() {
    const actionData = useActionData()

    return (
        <div className="overflow-y-scroll max-w-lg scrollbar-hide ">
            <h1 className="text-4xl font-bold mb-2  mr-2">Create snippet</h1>
            <Form method="post">
                <label
                    htmlFor="title"
                    className="block pb-2 text-xl font-semibold"
                >
                    Title
                </label>
                {actionData && actionData.errors?.title && (
                    <p className="text-red-500">
                        {actionData.errors.title.message}
                    </p>
                )}
                <input
                    type="text"
                    name="title"
                    id="title"
                    className={
                        "w-full min-w-[200px] " +
                        (actionData && actionData.errors?.description
                            ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black"
                            : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white")
                    }
                />

                <label
                    htmlFor="languageTag"
                    className="block mt-3 pb-2 text-xl font-semibold"
                >
                    Language
                </label>
                <select
                    name="languageTag"
                    className="text-white dark:bg-gray-700 bg-blue-600   "
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
                    htmlFor="visibility"
                    className="block mt-3 pb-2 text-xl font-semibold"
                >
                    Public or private snippet?
                </label>
                <select
                    name="visibility"
                    className="text-white dark:bg-gray-700 bg-blue-600"
                    defaultValue="Public"
                >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                </select>

                <label
                    htmlFor="description"
                    className="block mt-3 text-xl pb-2 font-semibold"
                >
                    Description
                </label>
                {actionData && actionData.errors?.description && (
                    <p className="text-red-500">
                        {actionData.errors.description.message}
                    </p>
                )}
                <textarea
                    name="description"
                    cols="10"
                    rows="5"
                    id="description"
                    className={
                        "w-full min-w-[200px] " +
                        (actionData && actionData.errors?.description
                            ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black"
                            : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white")
                    }
                />

                <label
                    htmlFor="snippet"
                    className="block mt-3 pb-2 text-xl font-semibold"
                >
                    Snippet
                </label>
                {actionData && actionData.errors?.snippet && (
                    <p className="text-red-500">
                        {actionData.errors.snippet.message}
                    </p>
                )}
                <textarea
                    name="snippet"
                    id="snippet"
                    cols="10"
                    rows="8"
                    className={
                        "w-full min-w-[200px] " +
                        (actionData && actionData.errors?.description
                            ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black"
                            : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white")
                    }
                />
                <br />
                <button
                    type="submit"
                    className=" dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg mt-3 text-xl font-semibold bg-blue-800 text-white  hover:bg-blue-600"
                >
                    Save snippet
                </button>
            </Form>
        </div>
    )
}
