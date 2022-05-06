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
    console.log("web-push: ", subscription)

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
            const data = await request.json()

            console.log(data)

            console.log("subscriptions: ", data.subs.subscribers)
            data.subs.subscribers.forEach(async (sub) => {
                const subscription = await db.models.user
                    .findOne({ _id: sub })
                    .select({ subscription: 1, _id: 0 })
                console.log("sub: ", subscription.subscription)
                console.log("pushMessage: ", data.push)
                console.log(subscription.subscription.endpoint)

                sendNotification(subscription.subscription, data.push)
            })

            // // Send notification to all Subscription

            return json({
                status: 200,
                message: "Message sent",
                // subscriptions,
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
