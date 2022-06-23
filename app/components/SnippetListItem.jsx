import { PrivateIcon, PublicIcon, StarIcon } from "~/components/Icons"
import { NavLink } from "remix"

export default function SnippetListItem({ snippet, languageTag, isFavorite }) {
    const dateAdded = new Date(snippet.dateAdded).toLocaleDateString("da-DK", {
        dateStyle: "long",
    })

    const listItemStyles =
        "rounded-lg   bg-blue-800 dark:bg-gray-800 p-3 mb-1 min-w-300-px hover:bg-blue-600 dark:hover:bg-gray-700 "
    const activeItemStyles = "bg-blue-600 dark:bg-gray-700 "
    return (
        <NavLink
            to={`/snippets/${languageTag}/${snippet._id}`}
            className={({ isActive }) =>
                listItemStyles + (isActive ? activeItemStyles : "")
            }
        >
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
                <p className=" text-white dark:text-gray-300">{dateAdded}</p>

                <StarIcon fill={isFavorite} />
            </div>
        </NavLink>
    )
}
