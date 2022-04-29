import { redirect } from "remix"

import { destroySession, getSession } from "../sessions.server"

export async function action({ request }) {
    const session = await getSession(request.headers.get("Cookie"))

    return redirect("/login", {
        headers: {
            "Set-Cookie": await destroySession(session),
        },
    })
}

export async function loader() {
    return redirect("/login")
}
