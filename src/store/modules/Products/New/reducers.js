const initialState = {
    isLoading: false,
    product: null,
    error: null
};

const addProduct = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch(type) {
        case 'ADD_NEW_START': {
            return {
                ...state,
                isLoading: true,

            };
        }
        case 'ADD_NEW_SUCCESS': {
            return {
                ...state,
                product: payload,
                error: null,
                isLoading: false,
            }
        }
        case 'Add_NEW_ERROR': {
            return {
                ...state,
                error:error,
                isLoading: false,
            }
        }
        default: {
            return state;
        }
    }
}

export default addProduct;