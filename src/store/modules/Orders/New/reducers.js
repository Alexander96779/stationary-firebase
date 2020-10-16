const initialState = {
    isLoading: false,
    order: null,
    error: null
};

const  makeOrder = (state = initialState, action ) => {
    const { type, payload, error } = action;

    switch(type) {
        case 'NEW_ORDER_START': {
            return {
                ...state,
                isLoading: true
            };
        }
        case 'NEW_ORDER_SUCCESS': {
            return {
                ...state,
                order: payload,
                isLoading: false
            };
        }
        case 'NEW_ORDER_ERROR': {
            return {
                ...state,
                error: error,
                isLoading: false
            };
        }
        default: {
            return state;
        }
    }
}

export default makeOrder;