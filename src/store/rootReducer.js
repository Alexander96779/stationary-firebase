import { combineReducers } from 'redux';
import loginUser from './modules/Login/reducers';

const rootReducer = combineReducers({

    loginUser
});

export default rootReducer;
