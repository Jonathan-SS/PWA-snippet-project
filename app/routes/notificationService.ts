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
        await webpush.sendNotification(subscription, JSON.stringify(dataToSend))
    } catch (error) {
        console.log("error: ", error)
    }
}

export const action: ActionFunction = async ({ request }) => {
    const db = await connectDb()

    switch (request.method) {
        case "POST":
            const data = await request.json()
            console.log("data: ", data)

            const subscribersEndpoint = await db.models.user.find(
                {
                    _id: data.subs.subscribers,
                },
                { subscription: 1, _id: 0 }
            )
            const mappedSubscribersEndpoints = subscribersEndpoint.reduce(
                (acc, item) => [...acc, ...item.subscription],
                []
            )
            console.log("subscribersEndpoint: ", mappedSubscribersEndpoints)

            // TODO: make an inital fetch to get the subscribers
            mappedSubscribersEndpoints.forEach((subscribeObject) => {
                console.log("subscription: ", subscribeObject)

                sendNotification(subscribeObject, data.push)
            })

            return json({
                status: 200,
                message: "Message sent",
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
