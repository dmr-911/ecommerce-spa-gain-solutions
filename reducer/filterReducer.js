const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

      // get and set data from DOM
    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: sort_value,
      };

    // sorting our products
    case "SORTING_PRODUCTS":
      let tempSortProduct = [...action.payload];

      if (state.sorting_value === "All Products") {
        return {
          ...state,
          filter_products: tempSortProduct,
        };
      }

      if (state.sorting_value === "Best Value") {
        const bestValue = tempSortProduct.sort(
          (a, b) => a.phone_price - b.phone_price
        );
        
        return {
          ...state,
          filter_products : bestValue
        }
      }

    default:
      return state;
  }
};

export default filterReducer;
