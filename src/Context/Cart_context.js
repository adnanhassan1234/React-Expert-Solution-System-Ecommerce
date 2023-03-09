import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../Reducer/CartReducer";

/* Creating a context object. */
const cartProvider = createContext();

/**
 * If the local storage item 'cartItems' is an empty array, return an empty array, otherwise return
 */
const getLocalCartData = () => {
  let localCartData = localStorage?.getItem("cartItems");
  if (localCartData === []) {
    return [];
  } else {
    /* Parsing the stringified data from local storage and returning it as an array. */
    return JSON.parse(localCartData);
  }
};

const initialState = {
  cart: [],
  // cart: getLocalCartData(),
  total_item: "", // CART_TOTAL_AMOUNT
  total_price: "", // CART_TOTAL_PRICE_OVERALL
  shipping_fee: 500, // SHIPPING_TEXT_FEE
};

const Cart_context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    /* Dispatching an action to the reducer. */
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };


  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  // when click on clear cart button all add cart are deleted!
  const clearCart = () => {
    dispatch({ type: "REMOVE_CART_ALL_ITEM" });
  };


  //  * quantity of the product with the id that was passed in.

  const setIncrement = (id) => {
    dispatch({ type: "INCREMENT_PRODUCT_QUANTITY", payload: id });
  };

  const setDecrement = (id) => {
    dispatch({ type: "DECREMENT_PRODUCT_QUANTITY", payload: id });
  }; // close INCREMENT_ and DECREMENT quantity

  /* Saving the state of the cart to local storage. */
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_AMOUNT" });
    dispatch({ type: "CART_TOTAL_PRICE_OVERALL" });
    // localStorage.setItem("cartItems", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <>
      <cartProvider.Provider
        value={{
          ...state,
          addToCart,
          setIncrement,
          setDecrement,
          removeItem,
          clearCart,
        }}
      >
        {children}
      </cartProvider.Provider>
    </>
  );
};

// custom hook
const useCartContext = () => {
  return useContext(cartProvider);
};

export default Cart_context;
export { cartProvider, useCartContext };
