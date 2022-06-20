import { redirect } from "remix"

import { destroyUserSession, getUserSession } from "../sessions.server"

export async function action({ request }) {
    const userSession = await getUserSession(request.headers.get("Cookie"))
    return redirect("/login", {
        headers: {
            "Set-Cookie": await destroyUserSession(userSession),
        },
    })
}

export async function loader() {
    return redirect("/login")
}
