import React, { useState } from "react";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import Button from 'react-bootstrap/Button';
import styles from "../styles/Login.module.css"
import Link from "next/link"

export default function Login(){
    firebaseClient();
    // const toast = useToast();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    return(
        <div className={styles.center}>
            <h2>Login</h2>
            <form action="" method="POST">
            <div>
                <label htmlFor="email">Email: </label>
                <input 
                    onChange={(e) => {
                        setEmail(e.target.value);
                        console.log(email)}} 
                    value={email} 
                    id="email" 
                    type="email" 
                    required />
            </div>
           <div>
            <label htmlFor="pass">Password: </label>
                <input 
                    onChange={(e) => {
                        e.preventDefault()
                        setPass(e.target.value)
                    }
                        } 
                    value={pass} 
                    id="pass" 
                    required />
           </div>
           
            <Button 
                variant="warning"
                disabled={email === "" || pass === ""} 
                onClick={async (e) => {
                    e.preventDefault();
                    console.log("gujhj")
                    await firebase.auth().createUserWithEmailAndPassword(email, pass)
                        .then( () => {
                            console.log("klghfgfjhghgjhr")
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
                >Create </Button>

            <Button 
                variant="primary"
                disabled={email === "" || pass === ""}
                onClick={(e) => {
                    e.preventDefault();
                    console.log(window.location.href)
                    firebase.auth().signInWithEmailAndPassword(email, pass)
                        .then(() => {
                        window.location.href = "http://localhost:3000/tinder"
                    }).catch(function (error) {
                        const message = error.message;
                        console.log(message)
                    })}}
                    
            >
            Sign In
            </Button>
            </form>
        </div>
        
       
    )
}
