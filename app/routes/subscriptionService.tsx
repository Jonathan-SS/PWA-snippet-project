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
            const data = await request.json()
            console.log(data)

            if (data._method === "addBoth") {
                try {
                    const newSubscribtion = await db.models.user.updateOne(
                        { _id: data.userId },
                        { subscription: data.subscription }
                    )

                    console.log(data.snippetId)
                    console.log(newSubscribtion._id)

                    await db.models.Snippet.updateOne(
                        { _id: data.snippetId },
                        {
                            $push: { subscribers: newSubscribtion._id },
                        }
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
            if (data._method === "addSub") {
                try {
                    await db.models.Snippet.updateOne(
                        { _id: data.snippetId },
                        {
                            $push: { subscribers: data.userId },
                        }
                    )

                    return new Response(data.userId, {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                } catch (error) {
                    return json({ status: 400 })
                }
            }
    }
}
