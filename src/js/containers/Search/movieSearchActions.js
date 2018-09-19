export const types = {
    UPDATE_MOVIE_TITLE: "UPDATE_MOVIE_TITLE",
    UPDATE_INPUT: "UPDATE_INPUT"
  };
  
  export function updateMovieTitle(title) {
    return {
      type: types.UPDATE_MOVIE_TITLE,
      payload: fetch(`http://www.omdbapi.com/?s=${title}&apikey=8730e0e`)
        .then(response => response.json())
        .then(data => {
          return {
            search: data.Search
            
          };
            
        })
        .catch(error => { 
          console.error(error);
        })
    };
  }
  export function updateInput(input) {
    return {
      type: types.UPDATE_INPUT,
      payload: {
        input
      }
    };
  }