import { redirect } from "remix"

import { getUserSession, destroyUserSession } from "../sessions.server"

export async function action({ request }) {
    const userSession = await getUserSession(request.headers.get("Cookie"))
    console.log("This should work")
    return redirect("/login", {
        headers: {
            "Set-Cookie": await destroyUserSession(userSession),
        },
    })
}

export async function loader() {
    return redirect("/login")
}
