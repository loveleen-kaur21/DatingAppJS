import { Page, Text, Button, Row, useToasts } from "@geist-ui/react";
import { useState } from "react";
import Router from 'next/router';
import firebase from 'firebase/app';
import "firebase/auth";

import initFirebase from "services/firebase";

initFirebase();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope("...")

export default function Join() {
    const [ authorizing, setAuthorizing ] = useState(false);

    return (
        <page>
            <Row justify="center">
            <Text h1>Join now</Text>
            </Row>
            <Row justify="center">
                <Text h2>Click below to sign in or join</Text>
            </Row>
            <Row justify="center">
                <Button loading={authorizing}>Get started</Button>
            </Row>
        </page> 
    )
}