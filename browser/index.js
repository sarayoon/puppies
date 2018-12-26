'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AllPuppiesContainer from './AllPuppiesContainer';
import store from './store';
import { HashRouter as Router, Route } from 'react-router-dom';
import SinglePuppy from './SinglePuppy';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="container flexbox-container">
        <div className="jumbotron">
          {/* <AllPuppiesContainer /> */}
          HELLO WHATS GOING ON HERE
          <Route exact path="/puppies" component={AllPuppiesContainer} />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
