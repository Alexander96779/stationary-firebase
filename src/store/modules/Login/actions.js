/* eslint-disable no-unused-vars */
import cogoToast from 'cogo-toast';
import firebase from 'firebase/app';
import {
LOGIN_START,
LOGIN_SUCCESS,
LOGIN_ERROR,
SIGNOUT_SUCCESS,
SIGNOUT_ERROR
} from './actionTypes';
import history from '../../../utils/history';

const apiStart = () => ({
    type: LOGIN_START,
});
const apiSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});

const apiError = (error) => ({
    type: LOGIN_ERROR,
    error,
});

const showErrorMessage = (message) => {
    cogoToast.error(message, { position: 'top-right' });
};

const showSuccessMessage = (message) => {
    cogoToast.success(message, { position: 'top-right' });
};

export const login = (email, password) => async (dispatch) => {
    if (!(email === '' || password === '')) {
        dispatch(apiStart());
       firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                dispatch(apiSuccess(res.user));
                history.push('/home');
            })
            .catch((err) => {
                if (err.code === 'auth/user-not-found') {
                    showErrorMessage('You are not authorized');
                } else if (err.code === 'auth/wrong-password') {
                    showErrorMessage('Wrong email or password');
                } else {
                    showErrorMessage('Error logging you in. Try again');
                }
                dispatch(apiError(err));
            });
    } else {
        showErrorMessage('All fields are required');
        dispatch(apiError());
    }
};

export const signOut = () => (dispatch) => {
    firebase
    .auth()
    .signOut().then(() =>{
        dispatch({ type: SIGNOUT_SUCCESS});
        history.push('/');
    })
    .catch((err) => {
        showSuccessMessage('Can not logout', err);
        dispatch({ type: SIGNOUT_ERROR});
    });
}


