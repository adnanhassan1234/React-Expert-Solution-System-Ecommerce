const FilterReducers = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((currElm) => currElm.price);
      // console.log("priceArr", priceArr);
      let maxPrice = priceArr.reduce(
        (initialVal, currVal) => Math.max(initialVal, currVal),
        0
      );
      // console.log(" maxPrice", maxPrice);

      return {
        ...state,
        filter_products: [...action.payload], // copy original all data product
        all_products: [...action.payload], // copy original all data product
        /* A spread operator. It is used to copy the properties of an object. */
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    // **====== GET_SORT_VALUE BY SELECT DROPDOWN  =======**

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload, // get userValue all products
      };

    // GET_SORT_VALUE BY SELECT DROPDOWN
    case "SORTING_PRODUCT":
      let newSortData;

      const { filter_products, sorting_value } = state; //destructure
      let tempSortProduct = [...filter_products]; // copy original all data product

      //Global Function

      const sortingProducts = (a, b) => {
        // Lowest price from all products A ---- Z
        if (sorting_value == "lowest") {
          return a.price - b.price;
        }
        // highest price from all products A ---- Z
        if (sorting_value == "highest") {
          return b.price - a.price; // desending
        }
        // Assending order product sorting show A ---- Z
        if (sorting_value == "a-z") {
          return a.name.localeCompare(b.name); // name compare (a ,b) => assending order
        }
        // Dessending order product sorting show Z ---- A
        if (sorting_value == "z-a") {
          return b.name.localeCompare(a.name); // name compare (a ,b) => assending order
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    //  UPDATE_FILTER_VALUE COLOR BY RANGE
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload; //destructure

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    //  SEARCH_FILTER_PRODUCT
    case "FILTER_PRODUCT":
      let { all_products } = state; //destructure
      let tempFilterProduct = [...all_products]; // copy original all data product

      const { text, color, price } = state.filters; //destructure

      /* Filtering the array of objects based on the name property. */
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currElm) => {
          return currElm.name.toLowerCase().includes(text);
        });
      }

      /* Filtering the products based on the color. */
      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currElm) => {
          return currElm.colour.includes(color);
        });
      }
      /* Filtering the products based on the price. */
      if (price) {
        tempFilterProduct = tempFilterProduct.filter((currElm) => {
          return currElm.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    /* Resetting the filters to their default values. */
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          names: "all",
          company: "all",
          color: "all",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default FilterReducers;
