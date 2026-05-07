import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVP9S9PYxORpXoGSCJYcRowQYgBbvBalg",
  authDomain: "coffee-management-e9584.firebaseapp.com",
  projectId: "coffee-management-e9584",
  storageBucket: "coffee-management-e9584.firebasestorage.app",
  messagingSenderId: "485479004657",
  appId: "1:485479004657:web:05d911233fa5783ebe2c50",
  measurementId: "G-VLZ1TGN8MJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
