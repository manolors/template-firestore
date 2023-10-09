import { setDoc, doc } from "firebase/firestore/lite";

export async function importMovies(db) {
  const moviePromises = [];
  fetch("./movies.json")
    .then((data) => data.json())
    .then(json => {
      for (const movie of json.movies) {
        const title = movie.title;
        delete movie.title;
        moviePromises.push(setDoc(doc(db, "movies", title), movie));
      }
    }).catch(err => console.error(err));
  await Promise.all(moviePromises);
  alert("Proceso finalizado");
}
