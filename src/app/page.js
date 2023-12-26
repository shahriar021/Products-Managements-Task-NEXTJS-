import Navbar from "../components/Navbar";
import Products from "../components/Products";

import { getDataFromAPI } from "@/helpers/pages";

export default async function Home() {
  const products = await getDataFromAPI();

  return (
    <layout>
      <p>This is the main page content.</p>
      <Products products={products} />
    </layout>
  );
}
