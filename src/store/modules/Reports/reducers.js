const initialState = {
    isLoading: false,
    products: [],
    error: null
};


const productsReport = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch(type) {
        case 'PRODUCT_REPORT_START': {
            return {
                ...state,
                isLoading: true,
            };
        }
        case 'PRODUCT_REPORT_SUCCESS': {
            return {
                ...state,
                products: payload,
                isLoading: false,
            };
        }
        case 'PRODUCT_REPORT_ERROR': {
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

export default productsReport;