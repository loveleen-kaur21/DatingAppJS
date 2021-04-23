import firebase from "firebase/app"


const config = {
    apiKey: 'AIzaSyBUTJ6AU0Ugj859bDMNFuH_GLxCvbhZ1Sg',
    authDomain: 'gitadate-2cdac.firebaseapp.com',
    databaseURL: 'https://gitadate-2cdac-default-rtdb.firebaseio.com',
    projectId: 'gitadate-2cdac',
    storageBucket: 'gitadate-2cdac.appspot.com',
    messagingSenderId: '438007955305',
    appId: '1:438007955305:web:055731955875d4ec51c7f8',
};

export default function firebaseClient() {
    if(!firebase.apps.length){
        firebase.initializeApp(config)
    }else{
        firebase.app();
    }
}