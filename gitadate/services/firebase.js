import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";




const config = {
    apiKey: 'AIzaSyBUTJ6AU0Ugj859bDMNFuH_GLxCvbhZ1Sg',
    authDomain: 'gitadate-2cdac.firebaseapp.com',
    databaseURL: 'https://gitadate-2cdac-default-rtdb.firebaseio.com',
    projectId: 'gitadate-2cdac'
};

let firebaseApp 

if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(config);
 }else {
    firebaseApp = firebase.app(); // if already initialized, use that one
 }

const database = firebase.firestore();

console.log(firebaseApp);

export default database;
