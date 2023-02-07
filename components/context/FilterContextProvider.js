import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { products } from "@/data/products";
import filterReducer from "@/reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "All Products",
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  // sorting function
  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  // to sort the product
  
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [products, state.sorting_value]);

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, sorting, initialState }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return React.useContext(FilterContext);
};
