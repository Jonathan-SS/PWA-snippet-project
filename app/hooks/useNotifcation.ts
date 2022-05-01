import { useEffect, useState } from "react"

function action() {
    const privateKey = "ibeRLO6Pwxaga8OH_YKTDDKUX8OqPMlCQxMUpFLA754"
}

function displayNotification() {
    if (Notification.permission == "granted") {
        console.log("Display message")
        navigator.serviceWorker.getRegistration().then(function (reg) {
            reg.showNotification("Hello world!", {
                body: "Here is a notification body!",
                icon: "http://lasseaakjaer.com/food-reduction-app-information-architecture.jpg",
                vibrate: [100, 50, 100],
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 1,
                },
                actions: [
                    {
                        action: "explore",
                        title: "Explore this new world",
                        icon: "images/checkmark.png",
                    },
                    {
                        action: "close",
                        title: "Close notification",
                        icon: "images/xmark.png",
                    },
                ],
            })
        })
    }
}

async function useNotifcation() {
    const [notification, setNotification] = useState(null)
    const [notificationType, setNotificationType] = useState(null)

    useEffect(() => {
        Notification.requestPermission(function (status) {
            console.log("Notification permission status:", status)
        })
    }, [])

    // Subcribe to push service from client
    const registration = await navigator.serviceWorker.getRegistration()
    const pushSubcribtion = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
            "BEApaM42xO4ckE_i6WH0SPyfAXWPtZJncv4d_foykgnhTGMaLsbmXOWdldaj7YTy4NJIzPdq4jO6Jl2lME_fg_E",
    })
    // pushSubscription.toJSON() // send to server
    // Sendt the messega to the server, with encripted with a public key

    // Subscribing to Push Notifications - https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications#subscribing_to_push_notifications
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register("sw.js")
            .then(function (reg) {
                console.log("Service Worker Registered!", reg)

                reg.pushManager.getSubscription().then(function (sub) {
                    if (sub === null) {
                        // Update UI to ask user to register for Push
                        console.log("Not subscribed to push service!")
                    } else {
                        // We have a subscription, update the database
                        console.log("Subscription object: ", sub)
                    }
                })
            })
            .catch(function (err) {
                console.log("Service Worker registration failed: ", err)
            })
    }
}
// https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications
// https://blog.atulr.com/web-notifications/

// Ask for permission of displaying a notfication, when favorting a snippet
// Subcribe to updates of the snippet
// Display a notification when the snippet is updated
// Sendt a notfication when a snippet is updated
