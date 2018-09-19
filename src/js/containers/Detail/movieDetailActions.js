export const types = {
    UPDATE_MOVIE_DETAIL: "UPDATE_MOVIE_DETAIL"
  };
  
  export function updateMovieDetail(detail) {
    return {
      type: types.UPDATE_MOVIE_DETAIL,
      payload: fetch(`https://www.omdbapi.com/?i=${detail}&apikey=8730e0e`)
        .then(response => response.json())
        .then(data => {
          return {
            title: data.Title,
            year: data.Year,
            runtime: data.Runtime,
            genre: data.Genre,
            plot: data.Plot,
            awards: data.Awards,
            poster: data.Poster,
            metascore: data.Metascore,
            imdbrating: data.imdbRating
          };
        })
        .catch(error => {
          console.log(error);
        })
    };
  }