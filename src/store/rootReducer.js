import { combineReducers } from 'redux';
import loginUser from './modules/Login/reducers';
import addProduct from './modules/Products/New/reducers';
import displayProducts from './modules/Products/ViewAll/reducers';
import updateProduct from './modules/Products/Update/reducers';
import makeOrder from './modules/Orders/New/reducers';

const rootReducer = combineReducers({

    loginUser,
    addProduct,
    displayProducts,
    updateProduct,
    makeOrder
});

export default rootReducer;
