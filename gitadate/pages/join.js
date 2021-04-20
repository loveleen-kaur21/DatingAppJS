import { useState} from "react";
import Router from 'next/router';
import firebase from 'firebase/app';
import "firebase/auth";
import initFirebase from "./../services/firebase";

initFirebase();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope("...")

export default function Join() {
    const [ authorizing, setAuthorizing ] = useState(false);
    return (
        <div>
            <input id="input" />
            {console.log("test")}
        </div>
        
    )
}
