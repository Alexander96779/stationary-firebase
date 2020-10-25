import * as firebase from 'firebase';
import cogoToast from 'cogo-toast';
import history from '../utils/history';

const showErrorMessage = (message) => {
  cogoToast.error(message, { position: 'top-right' });
};

export default function useProtectedRoute() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) {
        showErrorMessage('Error redirecting, login please!');
        history.push('/');
      }
    });
}