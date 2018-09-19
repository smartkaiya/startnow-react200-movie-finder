import { types } from "./movieDetailActions";

const defaultState = {
  title: "",
  year: "",
  runtime: "",
  genre: "",
  plot: "",
  awards: "",
  poster: "",
  metascore: "",
  imdbrating: ""
};

export default function MovieDetailReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.UPDATE_MOVIE_DETAIL + "_PENDING": {
      return {
        ...state,
        title: "",
        year: "",
        runtime: "",
        genre: "",
        plot: "",
        awards: "",
        poster: "",
        metascore: "",
        imdbrating: ""
      };
    }
    case types.UPDATE_MOVIE_DETAIL + "_FULFILLED": {
      return {
        ...state,
        title: payload.title,
        year: payload.year,
        runtime: payload.runtime,
        genre: payload.genre,
        plot: payload.plot,
        awards: payload.awards,
        poster: payload.poster,
        metascore: payload.metascore,
        imdbrating: payload.imdbrating
      };
    }
    default: {
      return state;
    }
  }
}