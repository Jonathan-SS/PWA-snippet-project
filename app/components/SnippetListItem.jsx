import { PrivateIcon, PublicIcon, StarIcon } from "~/components/Icons"
import { Link } from "remix"

export default function SnippetListItem({ snippet, languageTag }) {
    const dateAdded = new Date(snippet.dateAdded).toLocaleDateString("da-DK", {
        dateStyle: "long",
    })

    return (
        <li className="rounded-lg hover:bg-blue-600  bg-blue-800 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 mb-1 min-w-200-px">
            <Link to={`/snippets/${languageTag}/${snippet._id}`}>
                <div className="flex justify-between text-gray-300">
                    <h2 className=" text-white text-xl font-semibold">
                        {snippet.title}
                    </h2>
                    {snippet.visibility && <PublicIcon />}
                </div>
                <p className=" text-white  dark:text-gray-400">
                    {snippet.description.substring(0, 30)} ...
                </p>
                <div className="flex justify-between mt-1">
                    <p className=" text-white dark:text-gray-300">
                        {dateAdded}
                    </p>

                    <StarIcon fill={snippet.favorite} />
                </div>
            </Link>
        </li>
    )
}
