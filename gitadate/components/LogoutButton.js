import "firebase/auth"
import firebase from "firebase/app";


export default function LogoutButton() {
    return (
        <div>
            <button
                variant="primary"
                onClick={(e) => {e.preventDefault();
                firebase.auth().signOut().then(() => window.location.href = "http://localhost:3000/login/")}}>
            Log Out
            </button>
            </div>
    )
}


