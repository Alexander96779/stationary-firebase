import firebase from 'firebase/app';
import cogoToast from 'cogo-toast';
import {
ADD_NEW_START,
ADD_NEW_SUCCESS,
ADD_NEW_ERROR
} from './actionTypes';

const showErrorMessage = (message) => {
    cogoToast.error(message, { position: 'top-right' });
};

const showSuccessMessage = (message) => {
    cogoToast.success(message, { position: 'top-right' });
};

export const apiStart = () =>({
    type: ADD_NEW_START,
});

export const apiSuccess = (payload) =>({
    type: ADD_NEW_SUCCESS,
    payload
});

export const apiError = (error) => ({
    type: ADD_NEW_ERROR,
    error
});

export const addProduct = (name, quantity, supplier_name, supplier_email, description, price) => (dispatch) =>{
    if (name !== '' && quantity !== 0 && supplier_name !== '' && supplier_email !== '' && description !== '' && price !== 0) {
        dispatch(apiStart());
        firebase
            .firestore()
            .collection('products')
            .add({
                product_name: name,
                quantity: quantity,
                supplier_name: supplier_name,
                supplier_email: supplier_email,
                description: description,
                unit_price: price,
                created: firebase.firestore.Timestamp.now()
            })
            .then((res) => {
                dispatch(apiSuccess(res));
                showSuccessMessage('Product added successfully!');
            })
            .catch((err) => {
                console.log(err);
                dispatch(apiError(err));
                showErrorMessage('Error adding products info');
            });
    } else {
        showErrorMessage('All fields are required');
    }

}