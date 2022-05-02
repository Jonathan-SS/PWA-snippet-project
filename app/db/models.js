import { mongoose } from "mongoose"

const { Schema } = mongoose

const snippetSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, "Too short, minimum 5 characters"],
    },
    languageTag: String,
    snippet: {
        type: String,
        required: [true, "Missing snippet"],
    },
    description: {
        type: String,
        required: [true, "Missing description"],
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    },
    lastModified: {
        type: Date,
    },
    subscribers: {
        type: Array,
        default: [],
    },
})

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Gotta have a username"],
    },
    password: {
        type: String,
        required: [true, "Gotta have a password"],
    },
})
const subscribtionSchema = new Schema({
    endpoint: String,
    expirationTime: String,
    keys: {
        p256dh: String,
        auth: String,
    },
})

export const models = [
    {
        name: "Snippet",
        schema: snippetSchema,
        collection: "snippets",
    },
    {
        name: "user",
        schema: userSchema,
        collection: "users",
    },
    {
        name: "Subscribtion",
        schema: subscribtionSchema,
        collection: "subscribtions",
    },
]
