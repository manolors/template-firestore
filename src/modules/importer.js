import * as fs from "fs";
import { setDoc, doc } from "firebase/firestore/lite";

export async function importMovies(db) {
  const data = null;
  fs.readFile("./assets/movies.json", "utf8", (err, response) => {
    if (err) {
      console.error(err);
      return;
    }

    for (const movie of data) {
      const title = movie.title;
      delete movie.title;
      setDoc(doc(db, "movies", title), movie);
    }
  });
}
