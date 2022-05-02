// app/sessions.js
import { createCookieSessionStorage, redirect } from "remix"

import { userCookie } from "./cookies.server"

export const {
    getSession: getUserSession,
    commitSession: commitUserSession,
    destroySession: destroyUserSession,
} = createCookieSessionStorage({ cookie: userCookie })

export async function requireUserSession(request) {
    // get the session
    const cookie = request.headers.get("Cookie")
    const session = await getUserSession(cookie)

    // validate the session, `userId` is just an example, use whatever value you
    // put in the session when the user authenticated
    if (!session.has("userId")) {
        // if there is no user session, redirect to login
        throw redirect("/login")
    }

    return session
}
