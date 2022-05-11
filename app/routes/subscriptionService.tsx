import connectDb from "~/db/connectDb.server"
import { ActionFunction, json } from "remix"

export const action: ActionFunction = async ({ request }) => {
    const db = await connectDb()

    switch (request.method) {
        case "POST":
            const data = await request.json()
            console.log(data)

            const user = await db.models.user.findById(data.userId)

            console.log("herunder")

            console.log(user)

            if (!user.subscription.endpoint) {
                await db.models.user.updateOne(
                    { _id: data.userId },
                    { subscription: data.subscription }
                )

                await db.models.Snippet.updateOne(
                    { _id: data.snippetId },
                    {
                        $addToSet: { subscribers: user._id.toString() },
                    }
                )
            } else {
                await db.models.Snippet.updateOne(
                    { _id: data.snippetId },
                    {
                        $addToSet: { subscribers: user._id.toString() },
                    }
                )
            }

            return new Response(data.userId, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
    }
}
