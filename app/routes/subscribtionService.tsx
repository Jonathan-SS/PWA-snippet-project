import connectDb from "~/db/connectDb.server"
import { ActionFunction, json } from "remix"

export const action: ActionFunction = async ({ request }) => {
    const db = await connectDb()

    switch (request.method) {
        case "DELETE":
            await db.models.Subscribtion.deleteMany({})
            return json({
                status: 200,
                message: "Subscribtions deleted",
            })
        case "POST":
            try {
                const pushSubscribtion = await request.json()
                const newSubscribtion = await db.models.Subscribtion.create(
                    pushSubscribtion
                )

                return new Response(newSubscribtion, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            } catch (error) {
                return json({ status: 400 })
            }
    }
}
