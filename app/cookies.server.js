import { createCookie } from "remix"

export const sessionCookie = createCookie("__session", {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    secure: true,
    secrets: [process.env.COOKIE_SECRET],
})

export const userCookie = createCookie("__loggedIn", {
    maxAge: 60 * 60 * 24 * 7,
    secrets: [process.env.COOKIE_SECRET],
})
