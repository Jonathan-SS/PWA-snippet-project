import { Link } from "react-router-dom";
import { Form, redirect } from "remix";
import connectDb from "~/db/connectDb.server.js";
import seedData from "~/db/seed.json";

export async function loader() {
  const db = await connectDb();
  const count = await db.models.Snippet.countDocuments();
  if (count > 0) {
    return redirect("/snippets/all");
  }

  return null;
}

export async function action({ request }) {
  const form = await request.formData();
  const db = await connectDb();

  const _action = form.get("_action");
  if (_action === "seed") {
    try {
      await db.models.Snippet.insertMany(seedData);
      return redirect("/snippets/all");
    } catch (error) {
      throw error;
    }
  }
}

export default function Seed() {
  return (
    <>
      <div className=" h-64 min-w-200-px bg-blue-700 dark:bg-gray-700 fixed top-1/2 left-1/4 rounded-lg p-9 justify-center">
        <h2 className="text-2xl text-white ">
          It seems that your database is empty, would you like me to seed some
          data for you?
        </h2>
        <div className=" flex justify-center mt-16 gap-8">
          <Link to="/snippets/all">
            <button
              to="/snippets/all"
              className="text-xl text-white bg-red-600 hover:bg-red-800 rounded-lg px-4 py-2"
            >
              No!!😡
            </button>
          </Link>

          <Form method="post">
            <button
              name="_action"
              value="seed"
              type="submit"
              className="text-xl text-white hover:bg-green-800 bg-green-600 rounded-lg px-4 py-2"
            >
              Yes please boss😇
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}
