import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../../../../history';
import ReaderContainer from '../../../Reader/containers/ReaderContainer';

export default class App extends Component {
  componentWillMount () {
    this.props.web3Connect();
  }

  render() {
    return (
      <Router history={history}>
        <main>
          <Route exact path="/" component={ReaderContainer} />
        </main>
      </Router>
    );
  }
}

