import { Form, redirect, json, useActionData } from "remix";

import connectDb from "~/db/connectDb.server";

export async function action({ request }) {
  const form = await request.formData();
  const title = form.get("title");
  const languageTag = form.get("languageTag");
  const description = form.get("description");
  const snippet = form.get("snippet");
  const db = await connectDb();

  try {
    const newSnippet = await db.models.Snippet.create({
      title,
      languageTag,
      description,
      snippet,
    });
    return redirect(`/snippets/snippet/${newSnippet._id}`);
  } catch (error) {
    return json(
      { errors: error.errors, values: Object.fromEntries(form) },
      { status: 400 }
    );
  }
}

export default function CreateSnippet() {
  const actionData = useActionData();

  return (
    <div className="  overflow-y-scroll h-96 md:h-full w-full px-4 md:w-50-vw fixed scrollbar-hide ">
      <h1 className="text-4xl font-bold mb-2  mr-2">Create snippet</h1>
      <Form method="post">
        <label htmlFor="title" className="block text-xl font-semibold">
          Title
        </label>
        {actionData?.errors.title && (
          <p className="text-red-500">{actionData?.errors.title.message}</p>
        )}
        <input
          type="text"
          name="title"
          defaultValue={actionData?.errors.title.value}
          id="title"
          className={
            actionData?.errors.title
              ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 bg-blue-600 text-white dark:text-black "
              : " rounded-lg  px-2 dark:bg-gray-700 bg-blue-600 text-white   "
          }
        />

        <label
          htmlFor="languageTag"
          className="block mt-3 text-xl font-semibold"
        >
          Language
        </label>
        <select
          name="languageTag"
          className="text-white dark:bg-gray-700 bg-blue-600   "
        >
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="PHP">PHP</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
        </select>
        <label
          htmlFor="description"
          className="block mt-3 text-xl font-semibold"
        >
          Description
        </label>
        {actionData?.errors.description && (
          <p className="text-red-500">
            {actionData?.errors.description.message}
          </p>
        )}
        <textarea
          name="description"
          style={{ height: "100px", width: "66%" }}
          defaultValue={actionData?.errors.description.value}
          id="description"
          className={
            actionData?.errors.description
              ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black "
              : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white  "
          }
        />

        <label htmlFor="snippet" className="block mt-3 text-xl font-semibold">
          Snippet
        </label>
        {actionData?.errors.snippet && (
          <p className="text-red-500">{actionData?.errors.snippet.message}</p>
        )}
        <textarea
          name="snippet"
          defaultValue={actionData?.errors.description.value}
          id="snippet"
          style={{ height: "200px", width: "66%" }}
          className={
            actionData?.errors.description
              ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black "
              : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white  "
          }
        />
        <br />
        <button
          type="submit"
          className=" dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg mt-3 text-xl font-semibold bg-blue-800 text-white  hover:bg-blue-600"
        >
          Save snippet
        </button>
      </Form>
    </div>
  );
}
