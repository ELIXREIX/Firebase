/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const firebaseConfig = {
    apiKey: "AIzaSyDsFnXQKng4TqXB028BkZAeVo1rPKvJKR0",
    authDomain: "adas-e794b.firebaseapp.com",
    databaseURL: "https://adas-e794b-default-rtdb.firebaseio.com",
    projectId: "adas-e794b",
    storageBucket: "adas-e794b.appspot.com",
    messagingSenderId: "851207966004",
    appId: "1:851207966004:web:55ad5eecaf6d8a854be961",
    measurementId: "G-PDVWX71W1L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Reference to the VALUE/A path in the Realtime Database
const valueRef = database.ref('VALUE/A');

// Function to update the HTML with the current value of A
valueRef.on('value', (snapshot) => {
    const valueA = snapshot.val();
    document.getElementById('value-a').innerText = valueA;
});
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
