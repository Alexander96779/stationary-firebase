const initialState = {
    isLoading: false,
    products: [],
    error: null
};

const displayProducts = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch(type) {
        case 'VIEW_ALL_START': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'VIEW_ALL_SUCCESS': {
            return {
                ...state,
                products: payload,
                isLoading: false,
                error: null,
            };
        }
        case 'VIEW_ALL_ERROR': {
            return {
                ...state,
                error: error,
                isLoading: false
            };
        }
        case 'DELETE_SUCCESS': {
            let index = state.products.findIndex( (product) => product.id === action.payload);
            state.products.splice(index, 1);
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
}

export default displayProducts;