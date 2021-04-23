import React from "react";
import nookies from "nookies";
import {verifyIdToken} from "../firebaseAdmin";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";

function Authenticated({session}) {
    firebaseClient();
    if(session){
        return(
            <div>
                <h2>Authenticated</h2>
                <p>{session}</p>
                <p>You can do anything you are now authenticated.</p>
                <button
                    onClick={async () => {
                        await firebase.auth().signOut();
                        window.location.href = "http://localhost:3000"
                    }}>Sign out</button>
            </div>
            
        );
    } else {
        return (
            <p>Loading</p>
        );
    }
}

export async function getServerSideProps(context){
    try {
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies.token);
        const {uid, email} = token;
        return {
            props: {session: `Your email is ${email} and your UID is ${uid}.`},
        };
    } catch(err) {
        context.res.writeHead(302, {location: "http://localhost:3000/login"});
        context.res.end();
        return {props: [] };
    }
}

export default Authenticated;