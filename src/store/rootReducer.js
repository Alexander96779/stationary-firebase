import { combineReducers } from 'redux';
import loginUser from './modules/Login/reducers';
import addProduct from './modules/Products/New/reducers';

const rootReducer = combineReducers({

    loginUser,
    addProduct
});

export default rootReducer;
