import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6kdPChMZPQ1qHmkUBAoCvY1nWVX_hoRc",
  authDomain: "pet--care-6838d.firebaseapp.com",
  projectId: "pet--care-6838d",
  storageBucket: "pet--care-6838d.firebasestorage.app",
  messagingSenderId: "830497671573",
  appId: "1:830497671573:web:1835a99d87fb220330ce9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
