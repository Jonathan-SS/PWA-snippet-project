import connectDb from "~/db/connectDb.server"
import { ActionFunction, LoaderFunction, json } from "remix"
import webpush from "web-push"

//setting our previously generated VAPID keys
webpush.setVapidDetails(
    "mailto:myuserid@email.com",
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
)

//function to send the notification to the subscribed device
const sendNotification = async (subscription, dataToSend) => {
    try {
        webpush.sendNotification(subscription, JSON.stringify(dataToSend))
    } catch (error) {
        console.log("error: ", error)
    }
}

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
            const pushMessage = await request.json()
            console.log("pushMessage: ", pushMessage)

            // TODO: Filter subscribtions with query
            // TODO: Set expiration date on subscribtions
            // Fetch subscribtions from database
            const subscribtions = await db.models.Subscribtion.find().select({
                _id: 0,
                __v: 0,
            })

            // Send notification to all subscribtions
            subscribtions.forEach((subscribtion) => {
                sendNotification(subscribtion, pushMessage)
            })

            return json({
                status: 200,
                message: "Message sent",
                subscribtions,
            })
    }
}

export const loader: LoaderFunction = async () => {
    const db = await connectDb()
    const subscribtions = await db.models.Subscribtion.find().select({
        _id: 0,
        __v: 0,
    })

    return json({
        status: 200,
        message: "Message sent",
        subscribtions,
    })
}
