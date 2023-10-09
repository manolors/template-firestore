import firebaseConfig from "modules/firebaseconfig.js";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const db = getFirestore(initializeApp(firebaseConfig));
