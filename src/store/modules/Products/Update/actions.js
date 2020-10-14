import firebase from 'firebase';
import cogoToast from 'cogo-toast';
import {
UPDATE_START,
UPDATE_SUCCESS,
UPDATE_ERROR
} from './actionTypes';

const showErrorMessage = (message) => {
    cogoToast.error(message, { position: 'top-right' });
};

const showSuccessMessage = (message) => {
    cogoToast.success(message, { position: 'top-right' });
};

export const apiStart = () => ({
    type: UPDATE_START,
});

export const apiSuccess = (payload) => ({
    type: UPDATE_SUCCESS,
    payload,
});

export const apiError = (error) => ({
    type: UPDATE_ERROR,
    error,
});

export const editProduct = (id, name, quantity, supplier_name, supplier_email, 
    description, price) => (dispatch) => {
if (name !== '' && quantity !== 0 && supplier_name !== '' && supplier_email !== '' && description !== '' && price !== 0) {
    dispatch(apiStart());
    firebase
    .firestore()
    .collection('products')
    .doc(id)
    .update({
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
    .catch((err) =>{
        console.log(err);
        dispatch(apiError(err));
        showErrorMessage('Error updating product, try again');
    });
    } else {
        showErrorMessage('All fields are required');
    }
}