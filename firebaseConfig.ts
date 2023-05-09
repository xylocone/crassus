import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectStorageEmulator, getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfu1r_2T0q3Y_E9tOA4JwmsgpQwcJNWW4",
  authDomain: "crassus-xylo.firebaseapp.com",
  projectId: "crassus-xylo",
  storageBucket: "crassus-xylo.appspot.com",
  messagingSenderId: "962973091665",
  appId: "1:962973091665:web:89e7b5fe2862f535d5b570",
  measurementId: "G-BMD2GY97V8",
};

const app = initializeApp(firebaseConfig);

let tempAnalytics;
if (typeof window !== "undefined") {
  tempAnalytics = getAnalytics(app);
}

const analytics = tempAnalytics;
const db = getFirestore(app);
const functions = getFunctions(app);
const auth = getAuth(app);
const storage = getStorage(app);

if (process.env.NODE_ENV === "development") {
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(functions, "localhost", 5001);
  connectAuthEmulator(auth, "http://localhost:9099");
  connectStorageEmulator(storage, "locahost", 9199);
}

export { analytics, db, functions, auth, storage };
