import React from 'react';
import { updateMovieTitle, updateInput } from "./movieSearchActions";

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateInput(value));
  }

  handleClick(event) {
    const { dispatch, input } = this.props;
    dispatch(updateMovieTitle(input));
  }

  render() {
    const { resultList, input } = this.props;
    return (
      <div className="container">
        <h3 className="text-center">Movie Finder</h3>
        <div style={{ marginBottom: "10px" }} className="input-group">
          <input
            type="text"
            onChange={this.handleInputChange}
            className="form-control"
          />
          <span className="input-group-btn">
            <button onClick={this.handleClick} className="btn">
              Go!
            </button>
          </span>
        </div>
        <div className="row text-center">
          {resultList.map(list => (
            <div className="col-sm-4" key={list.imdbID} style={{'marginBottom': '25px'}}>
              <div className="card" style={{'height': '100%'}} key={list.imdbID}>
                <div className="card-body">
                  <img className="card-img" src={list.Poster} />
                </div>
                <div className="card-footer">
                  <a
                    href={`#/movie/${list.imdbID}`}
                    className="btn btn-info"
                    style={{}}
                  >
                    More Information
                  </a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
 

export default MovieSearchContainer;