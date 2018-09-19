import { types } from "./movieSearchActions";

const defaultState = {
  resultList: [],
  input: ""
};

export default function MovieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.UPDATE_MOVIE_TITLE + "_PENDING": {
      return {
        ...state,
        resultList: []
      };
    }
    case types.UPDATE_MOVIE_TITLE + "_FULFILLED": {
        console.log(payload);
      return {
        ...state,
        resultList: payload.search
      };
    }
    case types.UPDATE_INPUT: {
      return {
        ...state,
        input: payload.input
      };
    }
    default: {
      return state;
    }
  }
}