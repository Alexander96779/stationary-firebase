import firebase from 'firebase';
import cogoToast from 'cogo-toast';
import {
DELETE_ORDER_START,
DELETE_ORDER_SUCCESS,
DELETE_ORDER_ERROR
} from './actionTypes';

const showErrorMessage = (message) => {
    cogoToast.error(message, { position: 'top-right' });
};

const showSuccessMessage = (message) => {
    cogoToast.success(message, { position: 'top-right' });
};

export const apiStart = () =>({
    type: DELETE_ORDER_START,
});

export const apiSuccess = (payload) =>({
    type: DELETE_ORDER_SUCCESS,
    payload
});

export const apiError = (error) =>({
    type: DELETE_ORDER_ERROR,
    error
});

export const deleteOrder = (id) => (dispatch) =>{
    dispatch(apiStart());
    firebase
    .firestore()
    .collection('orders')
    .doc(id)
    .delete()
    .then(() => {
        dispatch(apiSuccess(id));
        showSuccessMessage('Order canceled');
    })
    .catch((err) => {
       console.log(err);
       dispatch(apiError(err));
       showErrorMessage('Error canceling order'); 
    });
}