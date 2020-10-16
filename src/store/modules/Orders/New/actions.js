import firebase from 'firebase';
import cogoToast from 'cogo-toast';
import {
NEW_ORDER_START,
NEW_ORDER_SUCCESS,
NEW_ORDER_ERROR
} from './actionTypes';

const showErrorMessage = (message) => {
    cogoToast.error(message, { position: 'top-right' });
};

const showSuccessMessage = (message) => {
    cogoToast.success(message, { position: 'top-right' });
};

export const apiStart = () =>({
    type: NEW_ORDER_START,
});

export const apiSuccess = (payload) =>({
    type: NEW_ORDER_SUCCESS,
    payload
});

export const apiError = (error) =>({
    type: NEW_ORDER_ERROR,
    error
});

export const addNewOrder = (name, phone_number, product1, product2, product3, 
    quantity1, quantity2, quantity3) => (dispatch) => {
    if(name !== '' && phone_number !== '') {
        let phoneno = /^\+?([0-9]{2})\)?([0-9]{10})$/;
        if (phone_number.match(phoneno)) {
            dispatch(apiStart());
        firebase
            .firestore()
            .collection('orders')
            .add({
                customer_name: name,
                phone_number: phone_number,
                products: [
                    { product_name: product1, quantity: quantity1 },
                    { product_name: product2, quantity: quantity2 },
                    { product_name: product3, quantity: quantity3 }
                ],
                Total: (quantity1 * 1000) + (quantity2 * 300) + (quantity3 * 200),
                created: firebase.firestore.Timestamp.now()
            })
            .then((res) => {
                dispatch(apiSuccess(res));
                showSuccessMessage('Order made successfully!');
            })
            .catch((err) => {
                console.log(err);
                dispatch(apiError(err));
                showErrorMessage('Error making order!');
            });
        } else {
            showErrorMessage('Wrong phone no format, use +2507__');
        }
    } else {
        showErrorMessage('All fields are required!')
    }
}