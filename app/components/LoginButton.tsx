import { Link } from "remix"

export default function LoginButton() {
    const loggedIn = true

    if (loggedIn) {
        return (
            <Link
                to="/logout"
                className="p-2 text-base font-normal  rounded-lg hover:bg-blue-600 text-white dark:hover:bg-gray-700"
            >
                Logout
            </Link>
        )
    }

    return (
        <Link
            to="/login"
            className="p-2 text-base font-normal  rounded-lg hover:bg-blue-600 text-white dark:hover:bg-gray-700"
        >
            Login
        </Link>
    )
}
