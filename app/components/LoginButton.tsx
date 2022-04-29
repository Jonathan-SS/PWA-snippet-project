import { Link } from "remix"

const LoginButtonStyle =
    "p-2 font-normal rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-gray-700"
export default function LoginButton() {
    const loggedIn = true

    if (loggedIn) {
        return (
            <Link to="/logout" className={LoginButtonStyle}>
                Logout
            </Link>
        )
    }

    return (
        <Link to="/login" className={LoginButtonStyle}>
            Login
        </Link>
    )
}
