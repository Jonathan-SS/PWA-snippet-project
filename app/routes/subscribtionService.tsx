// @ts-nocheck
import connectDb from "~/db/connectDb.server"
import { ActionFunction, LoaderFunction, json } from "remix"

export const action: ActionFunction = async ({ request }) => {
    const db = await connectDb()
    const pushSubscribtion = await request.json()

    try {
        const newSubscribtion = await db.models.Subscribtion.create(
            pushSubscribtion
        )
        console.log("newSubscribtion: ", newSubscribtion)
        return new Response(newSubscribtion, {
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (error) {
        return json({ status: 400 })
    }
}
