import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/movies";

function movieUrl (id){
  return `${apiEndpoint}/${id}`
}

export function getMovies() {
  return http.get(apiEndpoint);
}
export async function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if(movie._id){
    const body = {...movie}
    delete body._id;
    return http.put(movieUrl(movie._id), body)
  }
  return http.post(apiEndpoint,movie)
  // const movies = await getMovies();
  // let movieInDb = movies.find((m) => m._id === movie._id) || {};
  // movieInDb.name = movie.title;
  // movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  // movieInDb.numberInStock = movie.numberInStock;
  // movieInDb.dailyRentalRate = movie.dailyRentalRate;

  // if (!movieInDb._id) {
  //   movieInDb._id = Date.now().toString();
  //   movies.push(movieInDb);
  // }

  // return movieInDb;
}
export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
