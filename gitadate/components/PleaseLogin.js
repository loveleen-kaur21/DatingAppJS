import "firebase/auth"
import firebase from "firebase/app";
import Link from 'next/link'
import PleaseStyle from "../styles/PleaseLogin.module.css"


export default function LogoutButton() {
    return (
        <div className={PleaseStyle.style}>
            <Link href="/login">
          <a>Please Login to view possible matches :)</a>
        </Link>
            </div>
    )
}

