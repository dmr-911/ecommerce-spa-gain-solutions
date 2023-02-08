import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import AllProducts from "@/components/AllProducts";
import { FilterContextProvider } from "@/context/FilterContextProvider";
import Charts from "@/components/Charts";
import GotoTop from "@/components/GoToTop";

export default function Home() {
  return (
    <FilterContextProvider>
      <Head>
        <title>Gain Solutions</title>
      </Head>
      <GotoTop />
      <Navbar />
      <Charts />
      <AllProducts />
    </FilterContextProvider>
  );
}
