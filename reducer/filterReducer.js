const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    // get and set data from DOM using select id
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
        const bestValue = tempSortProduct
          .filter(
            (product) =>
              product.phone_price <= 20000 &&
              parseFloat(product.phone_details.internal_storage) >= 64 &&
              parseFloat(product.phone_details.ram) >= 4 &&
              (product.brand === "Xiaomi" || product.brand === "Realme")
          )
          .sort((a, b) => b.phone_price - a.phone_price);

        return {
          ...state,
          filter_products: bestValue,
        };
      }

      if (state.sorting_value === "Best Camera") {
        const newProducts = tempSortProduct.filter(
          (product) =>
            parseFloat(
              product?.phone_details?.mainCamera?.split(",")[0]?.split(" ")[0]
            ) >= 16 &&
            parseFloat(
              product?.phone_details?.selfieCamera?.split(",")[0]?.split(" ")[0]
            ) >= 13 &&
            parseFloat(product.phone_details.internal_storage) >= 64 &&
            product?.phone_details.external
        );

        return {
          ...state,
          filter_products: newProducts,
        };
      }

      if (state.sorting_value === "Best Performance") {
        const sortedProducts = tempSortProduct
          .filter(
            (product) =>
              product?.phone_details.chipset
                .toLowerCase()
                .includes("snapdragon") &&
              product.phone_price > 20000 &&
              parseFloat(product.phone_details.internal_storage) > 128 &&
              parseFloat(product.phone_details.ram) >= 4 &&
              product?.speciality.find(spc => spc.toLowerCase().includes("1080p"))
          )
          .sort((a, b) => b.phone_price - a.phone_price);

        return {
          ...state,
          filter_products: sortedProducts,
        };
      }

    default:
      return state;
  }
};

export default filterReducer;
