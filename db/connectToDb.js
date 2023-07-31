import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADbC5FXq61KAmoaB5f6qcFgGav3dDuYlY",
  authDomain: "date-manager-567cf.firebaseapp.com",
  projectId: "date-manager-567cf",
  storageBucket: "date-manager-567cf.appspot.com",
  messagingSenderId: "405269798403",
  appId: "1:405269798403:web:f10ceaf40244e562873836",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
