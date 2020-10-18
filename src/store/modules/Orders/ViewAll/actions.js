import firebase from 'firebase';
import cogoToast from 'cogo-toast';
import {  
    VIEW_ALL_START,
    VIEW_ALL_SUCCESS,
    VIEW_ALL_ERROR
} from './actionTypes';

const showErrorMessage = (message) => {
    cogoToast.error(message, { position: 'top-right' });
};

export const apiStart = () =>({
    type: VIEW_ALL_START,
});

export const apiSuccess = (payload) =>({
    type: VIEW_ALL_SUCCESS,
    payload
});

export const apiError = (error) =>({
    type: VIEW_ALL_ERROR,
    error
});

export const viewAll = () => (dispatch) =>{
    dispatch(apiStart());
    firebase
    .firestore()
    .collection('orders')
    .get()
    .then((res) => {
        let currentOrders = [];
        for(var i = 0; i < res.docs.length; i++) {
            let order = res.docs[i].data();
            order.id = res.docs[i].id;
            currentOrders.push(order);
        }
        dispatch(apiSuccess(currentOrders));
    })
    .catch((err) => {
        dispatch(apiError(err));
        showErrorMessage('Error displaying orders');
    })
}