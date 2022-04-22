import { mongoose } from "mongoose";

const { Schema } = mongoose;

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
});

export const models = [
  {
    name: "Snippet",
    schema: snippetSchema,
    collection: "snippets",
  },
];
