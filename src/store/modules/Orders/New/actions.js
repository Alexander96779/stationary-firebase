import firebase from 'firebase';
import cogoToast from 'cogo-toast';
import jsPDF from 'jspdf';
import moment from 'moment';
import 'jspdf-autotable';
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
            const date = `${moment(firebase.firestore.Timestamp.now().toDate()).format('LL')}`;
            const imgData = 'data:image/png;base64,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';
            const Total =  (quantity1 * 1000) + (quantity2 * 300) + (quantity3 * 200);
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 10, 10, 50, 15);
            pdf.setFontSize(10);
            pdf.text(15, 50, `Date: ${date}`);
            pdf.setFontSize(14);
            pdf.text(80, 60, 'ORDER INVOICE');
            pdf.text(15, 70, `Customer name: ${name}`);
            pdf.text(15, 80, `Phone number: ${phone_number}`);
            const headers = [["PRODUCTS", "QUANTITY"]];
            const products =  [
                { product_name: product1, quantity: quantity1 },
                { product_name: product2, quantity: quantity2 },
                { product_name: product3, quantity: quantity3 }
            ];
            const data = products.map(elt =>[elt.product_name, elt.quantity]);
            pdf.autoTable({
                startY: 90,
                head: headers,
                body: data
            });
            pdf.setFontSize(14);
            pdf.text(80, pdf.previousAutoTable.finalY + 10, `Total: ${Total}`);
            pdf.setFontSize(9);
            pdf.text(20, pdf.previousAutoTable.finalY + 16, 'Powered by Stationery © 2020');
    
            pdf.save(`Invoice_${name}`);
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