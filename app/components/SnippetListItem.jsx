import { Link } from "remix";

import { StarIcon } from "~/svg/all";

export default function SnippetListItem({ snippet, languageTag }) {
  const dateAdded = new Date(snippet.dateAdded);
  const displayDate = `${dateAdded.getDate()}-${dateAdded.getMonth()}-${dateAdded.getFullYear()}`;
  return (
    <li className=" min-w-200-px md:w-full  rounded-lg hover:bg-blue-600  bg-blue-800 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 mb-1 ">
      <Link to={`/snippets/${languageTag}/${snippet._id}`}>
        <h2 className=" text-white text-xl font-semibold">{snippet.title}</h2>
        <p className=" text-white  dark:text-gray-400">
          {snippet.description.substring(0, 30)} ...
        </p>
        <div className="flex justify-between mt-1">
          <p className=" text-white dark:text-gray-300">{displayDate}</p>
          <StarIcon fill={snippet.favorite} />
        </div>
      </Link>
    </li>
  );
}
