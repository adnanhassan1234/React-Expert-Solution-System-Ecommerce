
const ProductReducers = (state, action) => {

    switch (action.type) {
        // 1st API call data
        // API Fetch all data and show feature product if featured === true
        case "SET_API_DATA":
            return {
                ...state,
                products: action.payload,        // all product
            };

        // error show API data
        case "API_ERROR":
            return {
                ...state,
                isError: true,
            };


        //  My 2nd API call by Single_Product_Page 
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                singleProduct: action.payload,      // just singleProduct data display
            };

        // Single_API_ERROR data
        case "SINGLE_API_ERROR":
            return {
                ...state,
                isError: true,
            };


        default:
            return state;
    }
};

export default ProductReducers;