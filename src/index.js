import firebaseConfig from "./modules/firebaseconfig.js";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import { importMovies } from "./modules/importer.js";

const db = getFirestore(initializeApp(firebaseConfig));

document.querySelector(".importer button").addEventListener("click", async () => await importMovies(db));
