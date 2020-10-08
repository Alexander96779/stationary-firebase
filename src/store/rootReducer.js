import { combineReducers } from 'redux';
import loginUser from './modules/Login/reducers';
import addProduct from './modules/Products/New/reducers';
import displayProducts from './modules/Products/ViewAll/reducers';

const rootReducer = combineReducers({

    loginUser,
    addProduct,
    displayProducts
});

export default rootReducer;
