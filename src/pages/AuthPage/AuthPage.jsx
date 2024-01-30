import { useState } from "react"
import SignUpForm from "../../components/signUpForm/SignUpForm"
import LoginForm from "../../components/loginForm/LoginForm"

export default function AuthPage({setUser}) {
    const [showForm, setShowForm] = useState(true)

    function handleToggleForm() {
        setShowForm(!showForm)
    }

    return (
        <main>
            <h1>AuthPage</h1>
            {showForm ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
            <p>
                {showForm? "Already have an account? ": "Don't have an account? "}
                <button onClick={handleToggleForm}>
                    {showForm ? 'Login' : 'Sign Up'}
                </button>
            </p>
        </main>
    )
}