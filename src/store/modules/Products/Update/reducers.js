const initialState = {
    isLoading: false,
    product: null,
    error: null,
};

const updateProduct = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch(type) {
        case 'UPDATE_START': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'UPDATE_SUCCESS': {
            return {
                ...state,
                product: payload,
                isLoading: false,
            };
        }
        case 'UPDATE_ERROR': {
            return {
                ...state,
                error: error,
                isLoading: false,
            };
        }
        default: {
            return state;
        }
    }
}

export default updateProduct;