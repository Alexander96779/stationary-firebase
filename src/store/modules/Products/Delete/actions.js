import firebase from 'firebase';
import cogoToast from 'cogo-toast';
import {
DELETE_START,
DELETE_SUCCESS,
DELETE_ERROR
} from './actionTypes';

const showErrorMessage = (message) => {
    cogoToast.error(message, { position: 'top-right' });
};

const showSuccessMessage = (message) => {
    cogoToast.success(message, { position: 'top-right' });
};


export const apiStart = () =>({
    type: DELETE_START,
});

export const apiSuccess = (payload) =>({
    type: DELETE_SUCCESS,
    payload
});

export const apiError = (error) =>({
    type: DELETE_ERROR,
    error
});

export const deleteProduct = (id) => (dispatch) =>{
    dispatch(apiStart());
    firebase
    .firestore()
    .collection('products')
    .doc(id)
    .delete()
    .then(() => {
        dispatch(apiSuccess(id));
        showSuccessMessage('Product removed from store');
    })
    .catch((err) => {
       console.log(err);
       dispatch(apiError(err));
       showErrorMessage('Error deleting product'); 
    });
}