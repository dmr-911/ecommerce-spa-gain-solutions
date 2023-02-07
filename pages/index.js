import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import AllProducts from "@/components/AllProducts";
import { FilterContextProvider } from "@/components/context/FilterContextProvider";

export default function Home() {
  return (
    <FilterContextProvider>
      <Navbar />
      <AllProducts />
    </FilterContextProvider>
  );
}
