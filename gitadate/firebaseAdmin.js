const admin = require('firebase-admin');
import secretAccount from "./secrets.js"

export const verifyIdToken = (token) => {
    if (!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://gitadate-2cdac-default-rtdb.firebaseio.com",
        });
    } 
    return admin
        .auth()
        .verifyIdToken(token)
        .catch((error) => {
        throw error;
    });
};