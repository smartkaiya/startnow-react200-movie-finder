import React from 'react';
import { updateMovieDetail } from "./movieDetailActions";

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(updateMovieDetail(`${this.props.match.params.id}`));
  }

  render() {
    const {
        title,
        year,
        runtime,
        genre,
        plot,
        awards,
        poster,
        metascore,
        imdbrating
      } = this.props;
    return (
        <div className="container">
        <h1 className="text-center" style={{'marginBottom': '15%'}} >Movie Finder</h1>
        <div className="row">
            <img
              className="detail-img img-responsive"
              src={poster}
              alt="Detail image"
            />
          <div className="col-sm-8">
            <div className="card text-center">
              <h4 className="card-header">Movie Detail</h4>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <span className="badge badge-primary">{year}</span>
                <span className="badge badge-primary">{runtime}</span>
                <span className="badge badge-primary">{genre}</span>
                <br />
                <p>{plot}</p>
                <br />
                <p>{awards}</p>
                <br />
                <strong>Metascore:</strong> {metascore}
                <br />
                <strong>IMDB:</strong> {imdbrating}
              </div>
            </div>
          </div>
        </div>
        <a id="button" href={`#/`} className="btn btn-primary" style={{'marginTop': '5%'}}>
            Go Back
          </a>
      </div>
    );
  }
}

export default MovieDetailContainer;