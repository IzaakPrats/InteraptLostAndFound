
  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyCZnmgHZG4SgzgdhR8mvXPyMiYwgNJfG_Q",
    authDomain: "lostfound-b80fc.firebaseapp.com",
    databaseURL: "https://lostfound-b80fc.firebaseio.com",
    projectId: "lostfound-b80fc",
    storageBucket: "lostfound-b80fc.appspot.com",
    messagingSenderId: "919579258670"
  };
  firebase.initializeApp(config);

//Refrence to the database
let database = firebase.database();

//Refrence the items branch of your databse
let resourceRef = firebase.database().ref("resources");

function updateFirebase() {
   
};