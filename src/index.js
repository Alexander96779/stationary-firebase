import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import Firebase, { FirebaseContext } from './Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
        <App />
    </Provider>
    </FirebaseContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
