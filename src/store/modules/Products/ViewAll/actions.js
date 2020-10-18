import firebase from 'firebase';
import cogoToast from 'cogo-toast';
import { 
VIEW_ALL_START,
VIEW_ALL_SUCCESS,
VIEW_ALL_ERROR,
} from './actionTYpes';

export const apiStart = () => ({
    type: VIEW_ALL_START,
});

export const apiSuccess = (payload) => ({
    type: VIEW_ALL_SUCCESS,
    payload
});


export const apiError = (error) => ({
    type: VIEW_ALL_ERROR,
    error
});

const showErrorMessage = (message) => {
    cogoToast.error(message, { position: 'top-right' });
};

export const viewAll = () => (dispatch) => {
    dispatch(apiStart());
    firebase
    .firestore()
    .collection('products')
    .get()
    .then((res) => {
        let currentProducts = [];
        for(var i = 0; i < res.docs.length; i++) {
            let product = res.docs[i].data();
            product.id = res.docs[i].id;
            currentProducts.push(product);
        }
        dispatch(apiSuccess(currentProducts));
    })
    .catch((err) => {
        dispatch(apiError(err));
        showErrorMessage('Error displaying products');
    });
}
