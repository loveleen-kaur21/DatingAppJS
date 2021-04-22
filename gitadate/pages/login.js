import React, { useState } from "react";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";


export default function Login(){
    firebaseClient();
    // const toast = useToast();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return(
        <div>
            <h2>Login</h2>
            <form action="" method="POST">
            <label htmlFor="email">Email</label>
            <input 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                id="email" 
                type="email" 
                required />
            <label htmlFor="pass">Password</label>
            <input 
                onChange={(e) => setPass(e.target.value)} 
                value={pass} 
                id="pass" 
                required />
            <button 
                disabled={email === "" || pass === ""} 
                onClick={async () => {
                    await firebase.auth().createUserWithEmailAndPassword(email, pass)
                        .then(function() {
                        window.location.href = "/"
                    }).catch(function (error) {
                        const message = error.message;
                        console.log(message)
                        // toast({
                        //     title:"An error occurred",
                        //     description: message,
                        //     status: 'error',
                        //     duration: 9000,
                        //     isClosable: true,
                        // })
                    })}}
                >Create </button>

            <button 
                disabled={email === "" || pass === ""}
                onClick={async () => {
                    await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, pass)
                        .then(function() {
                        window.location.href = "/tinder.js"
                    }).catch(function (error) {
                        const message = error.message;
                        console.log(message)
                        // toast({
                        //     title:"An error occurred",
                        //     description: message,
                        //     status: 'error',
                        //     duration: 9000,
                        //     isClosable: true,
                        // })
                    })}}
            >Sign in </button>
            </form>
        </div>
        
       
    )
}