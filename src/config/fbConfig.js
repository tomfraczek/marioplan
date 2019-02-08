import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCj-UmjRX6iyc-8KpG-wc5Je3bNcNVpdgI",
    authDomain: "capoeira-traning-database.firebaseapp.com",
    databaseURL: "https://capoeira-traning-database.firebaseio.com",
    projectId: "capoeira-traning-database",
    storageBucket: "capoeira-traning-database.appspot.com",
    messagingSenderId: "506324695849"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;