const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    /* Destructuring the action.payload object. */
    let { id, color, amount, product } = action.payload;
   //  console.log(" Add to cart single data product", product);

    /* Checking if the product is already in the cart. */
    let exitingProduct = state.cart.find((currElem) => {
      return currElem.id === id + color;
    });

    /* Checking if the product is already in the cart. If it is, it will update the amount of the product. */
    if (exitingProduct) {
      let updatedProduct = state.cart.map((currElem) => {
        if (currElem.id === id + color) {
          let newAmount = currElem.amount + amount;

          /* Checking if the new amount is greater than the max amount. If it is, it will set the new amount to the max amount. */
          if (newAmount >= currElem.max) {
            newAmount = currElem.max;
          }

          return {
            ...currElem,
            amount: newAmount,
          };
        } else {
          return currElem;
        }
      });
      return {
        ...state,
        /* Adding the new product to the cart array. */
        cart: updatedProduct,
      };
    } else {
      /* Creating a new object with the properties of the product object and adding the color and amount
         properties. */
      let cartProduct = {
        //object
        id: id,
        name: product.name,
        color,
        amount,
        image: product.img,
        price: product.price,
        max: product,
      };

      /* Returning a new object with the properties of the state object and adding the cart property. */
      return {
        ...state,
        /* Adding the new product to the cart array. */
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // *=========== REMOVE_ITEM  ===========*

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((currItem) => {
      return currItem.id !== action.payload;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  /* Removing all items from the cart on cart page. */
  if (action.type === "REMOVE_CART_ALL_ITEM") {
    return {
      ...state,
      cart: [],
    };
  }

  /* Incrementing the amount of the product. */
  if (action.type === "INCREMENT_PRODUCT_QUANTITY") {
    let updatedProduct = state.cart.map((currElem) => {
      if (currElem.id === action.payload) {
        // => each product id
        /* Incrementing the amount of the product. */
        let increAmount = currElem.amount + 1;

        /* Checking if the new amount is greater than the max amount. If it is, it will set the new amount to the max amount. */
        if (increAmount >= currElem.max) {
          increAmount = currElem.max;
        }

        return {
          ...currElem,
          amount: increAmount,
        };
      } else {
        return currElem;
      }
    });
    /* Returning a new object with the properties of the state object and adding the cart property. */
    return { ...state, cart: updatedProduct };
  }

  /* decrementing the amount of the product. */
  if (action.type === "DECREMENT_PRODUCT_QUANTITY") {
    let updatedProduct = state.cart.map((currElem) => {
      if (currElem.id === action.payload) {
        // => each product id
        /* Incrementing the amount of the product. */
        let decAmount = currElem.amount - 1;

        /* Checking if the amount is less than or equal to 1. If it is, it will set the amount to 1. */
        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...currElem,
          amount: decAmount,
        };
      } else {
        return currElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  // *================= CART_TOTAL_AMOUNT  =================*

  if (action.type === "CART_TOTAL_AMOUNT") {
    let updatedItemVal = state.cart.reduce((initialVal, currElem) => {
      // loop
      /* Destructuring the amount property from the currElem object. */
      let { amount } = currElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);


    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  // *================= CART_TOTAL_PRICE_OVERALL  =================*

  if (action.type === "CART_TOTAL_PRICE_OVERALL") {
    let updatedTotalPrice = state.cart.reduce((initialVal, currElem) => {
      // loop
      let { price, amount } = currElem;

      /* Adding the price of each product to the initial value. */
      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_price: updatedTotalPrice,
    };
  }

  return state;
};

export default CartReducer;
