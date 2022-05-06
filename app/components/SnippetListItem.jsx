import { StarIcon, PublicIcon, PrivateIcon } from "~/components/Icons"
import { Link } from "remix"

export default function SnippetListItem({ snippet, languageTag }) {
    const dateAdded = new Date(snippet.dateAdded)
    const displayDate = `${dateAdded.getDate()}-${dateAdded.getMonth()}-${dateAdded.getFullYear()}`

    return (
        <li className="rounded-lg hover:bg-blue-600  bg-blue-800 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 mb-1 min-w-300-px">
            <Link to={`/snippets/${languageTag}/${snippet._id}`}>
                <h2 className=" text-white text-xl font-semibold">
                    {snippet.title}
                </h2>
                <p className=" text-white  dark:text-gray-400">
                    {snippet.description.substring(0, 30)} ...
                </p>
                <div className="flex justify-between mt-1">
                    <p className=" text-white dark:text-gray-300">
                        {displayDate}
                    </p>
                </div>
                <div className="flex flex-col -mt-12 top-0 items-end">
                    {snippet.visibility ? <PublicIcon /> : <PrivateIcon />}

                    <StarIcon fill={snippet.favorite} />
                </div>
            </Link>
        </li>
    )
}
