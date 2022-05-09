import connectDb from "~/db/connectDb.server"
import bcrypt from "bcryptjs"
import { Form, json, redirect, useActionData, useSearchParams } from "remix"

import { commitUserSession, getUserSession } from "../sessions.server.js"

// export async function loader({ request }) {
//     const userSession = await getUserSession(request.headers.get("Cookie"))
//     return json({
//         loggedIn: userSession.get("loggedIn"),
//     })
// }

export async function action({ request }) {
    const db = await connectDb()
    const form = await request.formData()
    const username = form.get("username").trim()

    try {
        const user = await db.models.user.findOne({
            username: username,
        })

        if (!user) {
            return json(
                { errors: { username: "User not found" } },
                { status: 400 }
            )
        }

        const password = form.get("password").trim()
        const isCorrectPassword = await bcrypt.compare(password, user.password)
        if (!isCorrectPassword) {
            return json(
                { errors: { password: "Wrong password" } },
                { status: 400 }
            )
        }

        const userSession = await getUserSession(request.headers.get("Cookie"))
        console.log("userSession: ", userSession)
        userSession.set("userId", user.id)

        // return null
        return redirect("/snippets/all", {
            headers: {
                status: 200,
                "Set-Cookie": await commitUserSession(userSession),
            },
        })
    } catch (error) {
        console.log(error)
        return json(
            { errors: error.errors, values: Object.fromEntries(form) },
            { status: 400 }
        )
    }
}

const inputErrorStyles =
    "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 bg-blue-600 dark:text-rose-400 "

export default function Login() {
    const [searchParams] = useSearchParams()
    const actionData = useActionData()

    return (
        <div className="overflow-y-scroll h-96 md:h-full w-full px-4 md:w-50-vw scrollbar-hide">
            <h1 className="text-4xl font-bold mb-2 mr-2">Login</h1>
            <Form method="post" reloadDocument>
                <input
                    type="hidden"
                    name="redirectTo"
                    value={searchParams.get("redirectTo") ?? undefined}
                />
                <div>
                    <label
                        htmlFor="username-input"
                        className="block text-xl font-semibold"
                    >
                        Username
                    </label>
                    {actionData && actionData.errors?.username && (
                        <p className="text-red-500">
                            {actionData.errors.username.message}
                        </p>
                    )}
                    <input
                        type="text"
                        id="username-input"
                        name="username"
                        defaultValue=""
                        className={
                            actionData && actionData.errors?.username
                                ? inputErrorStyles
                                : "rounded-lg  px-2 dark:bg-gray-700 bg-blue-600 text-white   "
                        }
                    />
                </div>
                <div>
                    <label
                        htmlFor="password-input"
                        className="block text-xl font-semibold"
                    >
                        Password
                    </label>
                    {actionData && actionData.errors?.password && (
                        <p className="text-red-500">
                            {actionData.errors.password.message}
                        </p>
                    )}
                    <input
                        id="password-input"
                        name="password"
                        type="password"
                        required
                        className={
                            actionData && actionData.errors?.password
                                ? inputErrorStyles
                                : " rounded-lg  px-2 dark:bg-gray-700 bg-blue-600 text-white   "
                        }
                    />
                </div>
                <button
                    type="submit"
                    name="login"
                    className=" dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg mt-3 text-xl font-semibold bg-blue-800 text-white  hover:bg-blue-600"
                >
                    Login
                </button>
            </Form>

            <Form className="mt-5" action="/register" reloadDocument>
                <label
                    htmlFor="username-input"
                    className="block text-xl font-semibold"
                >
                    Don't have a user yet?
                </label>
                <button className=" dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg text-xl font-semibold bg-blue-800 text-white  hover:bg-blue-600">
                    Create user here
                </button>
            </Form>
        </div>
    )
}
