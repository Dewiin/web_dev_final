import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";

export function AuthForm() {
    async function handleGoogleLogin() {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Logged in as:", result.user.displayName);
        }
        catch (error) {
            console.error(error);
            alert("Failed to login with Google.");
        }
    };

    return (
        <div className="auth-form">
            <p>Welcome to Notes</p>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </div>
    );
}