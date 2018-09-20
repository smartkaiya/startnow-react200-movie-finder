import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';

import MovieSearchContainer from './containers/Search';
import MovieDetailContainer from './containers/Detail';


export default class App extends Component {
  render() {
    return (
      <div>
      {/* <h1>Hello World</h1> */}
      <Router>
      <div className='container'> 
        <Route exact path='/' component={ MovieSearchContainer } />
        <Route path='/movie/:id' component={ MovieDetailContainer } />
      </div>
    </Router>
    </div>
    );
  }
}
