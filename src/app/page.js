import Navbar from "../components/Navbar";
import Products from "../components/Products";
import styles from "../app/styles/Home.module.css";

import { getDataFromAPI } from "@/helpers/pages";

export default async function Home() {
  const products = await getDataFromAPI();

  return (
    <layout>
      <Products products={products} />,
    </layout>
  );
}
