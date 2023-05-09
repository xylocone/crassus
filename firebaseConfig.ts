import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDfu1r_2T0q3Y_E9tOA4JwmsgpQwcJNWW4",
    authDomain: "crassus-xylo.firebaseapp.com",
    projectId: "crassus-xylo",
    storageBucket: "crassus-xylo.appspot.com",
    messagingSenderId: "962973091665",
    appId: "1:962973091665:web:89e7b5fe2862f535d5b570",
    measurementId: "G-BMD2GY97V8"
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore();