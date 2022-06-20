import connectDb from "~/db/connectDb.server"
import bcrypt from "bcryptjs"
import { Form, json, redirect } from "remix"
import { commitUserSession, getUserSession } from "../sessions.server.js"

export async function action({ request }) {
    const form = await request.formData()
    const db = await connectDb()
    const username = form.get("username").trim()
    const password = await bcrypt.hash(form.get("password"), 10)
    try {
        const user = await db.models.user.create({
            username,
            password,
        })
        console.log(user)
        const session = await getUserSession(request.headers.get("Cookie"))
        session.set("userId", user.id)

        return redirect("/snippets/all", {
            headers: {
                status: 200,
                "Set-Cookie": await commitUserSession(session),
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

export default function register() {
    return (
        <div className="overflow-y-scroll h-96 md:h-full w-full px-4 md:w-50-vw scrollbar-hide">
            <h1 className="text-4xl font-bold mb-2 mr-2">Create User</h1>
            <Form method="post" reloadDocument>
                <input type="hidden" name="redirectTo" />
                <div>
                    <label
                        htmlFor="username-input"
                        className="block text-xl font-semibold"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username-input"
                        name="username"
                        className="rounded-lg px-2 dark:bg-gray-700 bg-blue-600 text-white"
                    />
                </div>
                <div>
                    <label
                        htmlFor="password-input"
                        className="block text-xl font-semibold"
                    >
                        Password
                    </label>
                    <input
                        id="password-input"
                        name="password"
                        type="password"
                        className="rounded-lg px-2 dark:bg-gray-700 bg-blue-600 text-white"
                    />
                </div>
                <button
                    type="submit"
                    name="createUser"
                    className=" dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg mt-3 text-xl font-semibold bg-blue-800 text-white  hover:bg-blue-600"
                >
                    Create User
                </button>
            </Form>
        </div>
    )
}
