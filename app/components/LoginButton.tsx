import { Form, Link } from "remix"
import { useAccount } from "../hooks/useAccount"

const LoginButtonStyle =
    "p-2 font-normal rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-gray-700"
export default function LoginButton() {
    const loggedIn = useAccount()

    if (loggedIn) {
        return (
            <Form method="post" action="/logout" reloadDocument>
                <button
                    type="submit"
                    name="logout"
                    className={LoginButtonStyle}
                    title="Logout button"
                >
                    Logout
                </button>
            </Form>
        )
    } else {
        return (
            <Link to="/login" className={LoginButtonStyle}>
                Login
            </Link>
        )
    }
}
