import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from './utils/history';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <>
      <Router history={history}>
        <Routes />
        <ToastContainer />
      </Router>
      </>
    )
  }
}

export default App;
