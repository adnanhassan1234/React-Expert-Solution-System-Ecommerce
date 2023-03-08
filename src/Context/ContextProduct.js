import { createContext, useContext, useReducer, useState } from 'react';
import React, { useEffect } from 'react';
import axios from 'axios';
import reducer from '../Reducer/ProductReducers';

const AppContext = createContext(); 

// initialState State
const initialState = {
    isError: false,
    products: [],
    singleProduct: {}
};

const ContextProduct = ({ children }) => {

    // useReducers hook
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isLoader, setIsLoader] = useState(false); //spinner

 
    //  My 1st API call by Feature_all_Product_Section
    const getProducts = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASEURL}`);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
            setIsLoader(true)
            console.log("API data has been successfully > all data", res.data);
            // localStorage.setItem("cart", JSON.stringify(res.data));
        } catch (error) {
            dispatch({ type: "API_ERROR" });
            console.log("API data could not be fetched", error);
        }
    };


    //  My 2nd API call by Single_Product_Page
    const getSingleProduct = async (url) => {
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data[0];
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
            setIsLoader(true);
            console.log("Single API data has been successfully", res.data);
        } catch (error) {
            dispatch({ type: "SINGLE_API_ERROR" });
            console.log("API data could not be fetched", error);
        }
    };

    useEffect(() => {
        getProducts();
        // getSingleProduct()
    }, [])


    if (!isLoader) {
        return <div className='loader'>
            <div className="spinner">
            </div>
        </div>
    };


    return (
        <>
            <AppContext.Provider value={{ ...state , getSingleProduct}}>
                {children}
            </AppContext.Provider>

        </>
    )
};

//  custom Hook below
const useProductContext = () => {
    return useContext(AppContext);
};

export default ContextProduct;
export { AppContext, useProductContext };