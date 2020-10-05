const initialState = {
    user: null,
    error: null,
    isLoggingIn: false,
    setIsLoggingIn: false,
    isAuthenticated: false,
};

const loginUser = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch(type) {
        case 'LOGIN_START': {
            return {
                ...state,
                setIsLoggingIn: true,
            };
        }
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                user: payload,
                error: null,
                setIsLoggingIn: false,
                isAuthenticated: payload ? true : false
            };
        }
        case 'LOGIN_ERROR': {
            return {
                ...state,
                error: error,
                setIsLoggingIn: false,
                isAuthenticated: false
            };
        }
        case 'SIGNOUT_SUCCESS': {
            return {
                ...state
            }
        }
        case 'SIGNOUT_ERROR': {
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
}

export default loginUser;