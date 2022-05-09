import connectDb from "~/db/connectDb.server"
import { ActionFunction } from "remix"

export const action: ActionFunction = async ({ request }) => {
    const db = await connectDb()

    switch (request.method) {
        case "POST":
            const data = await request.json()
            console.log(data.snippetId)

            const test = await db.models.Snippet.updateOne(
                { _id: data.snippetId },
                {
                    $pull: { subscribers: data.userId },
                }
            )
            console.log(test)

            return new Response(data.userId, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
    }
}
