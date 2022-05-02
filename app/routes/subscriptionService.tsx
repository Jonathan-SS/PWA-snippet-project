import connectDb from "~/db/connectDb.server"
import { ActionFunction, json } from "remix"

export const action: ActionFunction = async ({ request }) => {
    const db = await connectDb()

    switch (request.method) {
        case "DELETE":
            await db.models.Subscription.deleteMany({})
            return json({
                status: 200,
                message: "Subscriptions deleted",
            })
        case "POST":
            try {
                const pushSubscription = await request.json()
                console.log("pushSubscribtion: ", pushSubscription)
                const newSubscribtion = await db.models.Subscription.create(
                    pushSubscription
                )

                return new Response(newSubscribtion, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            } catch (error) {
                return json({ status: 400 })
            }
        default:
            return {
                status: 400,
                message: "Bad Request",
            }
    }
}
