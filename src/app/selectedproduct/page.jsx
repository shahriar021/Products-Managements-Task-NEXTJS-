import React from "react";
import { getSelectedProduct } from "@/helpers/pages";
import styles from "../styles/ProductsHome.module.css";
import Link from "next/link";

const page = async ({ searchParams }) => {
  const id = Number(searchParams.id);
  const product = await getSelectedProduct(id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-20 px-10 ">
      <img src={product.image} className={styles.image} alt="imag" />
      <div>
        <div className="subpixel-antialiased font-bold text-blue-900">
          {product.title}
        </div>
        <div className="py-5">Category:{product.category}</div>
        <div className="subpixel-antialiased italic text-sm py-5">
          {product.description}
        </div>
        <div className="text-orange-500 size-16 py-5">
          Rating:{product.rating.rate}
        </div>
        <div className="text-red-400 py-5">Price:{product.price}</div>

        <Link href="/">
          <button
            type="button"
            className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] py-5"
          >
            go to main menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
