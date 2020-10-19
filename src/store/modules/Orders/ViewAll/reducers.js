const initialState = {
    isLoading: false,
    orders: [],
    error: null
};


const displayOrders = (state = initialState, action) => {
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
                orders: payload,
                isLoading: false,
            };
        }
        case 'VIEW_ALL_ERROR': {
            return {
                ...state,
                error: error,
                isLoading: false,
            };
        }
        case 'DELETE_ORDER_SUCCESS': {
            let index = state.orders.findIndex( (order) => order.id === action.payload);
            state.orders.splice(index, 1);
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
}

export default displayOrders;