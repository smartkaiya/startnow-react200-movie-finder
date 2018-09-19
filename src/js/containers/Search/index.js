import { connect } from "react-redux";
import MovieSearchContainer from "./MovieSearchContainer";

function mapStoreToProps(store) {
  return {
    resultList: store.movieSearch.resultList,
    input: store.movieSearch.input
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);