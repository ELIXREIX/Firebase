// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the VALUE/A path in the Realtime Database
const valueRef = ref(database, 'VALUE/A');

// Function to update the HTML with the current value of A
onValue(valueRef, (snapshot) => {
    const valueA = snapshot.val();
    document.getElementById('value-a').innerText = valueA;
});
