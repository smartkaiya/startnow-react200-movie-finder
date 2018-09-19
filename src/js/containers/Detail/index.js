import { connect } from "react-redux";
import MovieDetailContainer from "./MovieDetailContainer";

function mapStoreToProps(store) {
  return {
    title: store.movieDetail.title,
    year: store.movieDetail.year,
    runtime: store.movieDetail.runtime,
    genre: store.movieDetail.genre,
    plot: store.movieDetail.plot,
    awards: store.movieDetail.awards,
    poster: store.movieDetail.poster,
    metascore: store.movieDetail.metascore,
    imdbrating: store.movieDetail.imdbrating
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);