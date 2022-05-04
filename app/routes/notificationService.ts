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
    console.log("default")
    const db = await connectDb()

    switch (request.method) {
        case "POST":
            const pushMessage = await request.json()
            console.log("pushMessage: ", pushMessage)

            // TODO: Filter Subscription with query
            // TODO: Set expiration date on Subscription
            // Fetch Subscription from database
            const subscriptions = await db.models.Subscription.find().select({
                _id: 0,
                __v: 0,
            })
            console.log("subscriptions: ", subscriptions)

            // Send notification to all Subscription
            subscriptions.forEach((subscription) => {
                sendNotification(subscription, pushMessage)
            })

            return json({
                status: 200,
                message: "Message sent",
                subscriptions,
            })
        default:
            return {
                status: 400,
                message: "Bad Request",
            }
    }
}

export const loader: LoaderFunction = async () => {
    const db = await connectDb()
    const subscription = await db.models.Subscription.find().select({
        _id: 0,
        __v: 0,
    })

    return json({
        status: 200,
        message: "Message sent",
        subscription,
    })
}
