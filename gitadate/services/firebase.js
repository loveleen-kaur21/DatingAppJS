import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";
import firebaseClient from '../firebaseClient'



// const config = {
//     apiKey: 'AIzaSyBUTJ6AU0Ugj859bDMNFuH_GLxCvbhZ1Sg',
//     authDomain: 'gitadate-2cdac.firebaseapp.com',
//     databaseURL: 'https://gitadate-2cdac-default-rtdb.firebaseio.com',
//     projectId: 'gitadate-2cdac',
//     storageBucket: 'gitadate-2cdac.appspot.com',
//     messagingSenderId: '438007955305',
//     appId: '1:438007955305:web:055731955875d4ec51c7f8',
// };
// let firebaseApp 
// if (!firebase.apps.length) {
//     firebaseApp = firebase.initializeApp(config);
//  }else {
// firebaseApp = firebase.app(); // if already initialized, use that one
//  }

firebaseClient()
const database = firebase.firestore();

export default database;
