"use client";

import { useEffect, useState } from "react"; // Import useState and useEffect hooks
import Button from "@/app/common/components/buttons";
import SelectComponent from "@/app/common/components/select/page";
import SearchInput from "@/app/common/components/searchInput/page";
import Product from "@/app/common/components/product/page";
import Link from "next/link";
const getAllProducts = async () => {
  try {
    const response = await fetch(`http://localhost:3003/products/`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return { data: { items: [] } };
  }
};

export default function ProductsTable() {
  const [products, setProducts] = useState({ data: { items: [], pages: 0 } });

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);
  console.log(products.data.pages);

  return (
    <div className="w-full h-screen py-4 pl-4 pr-6 flex flex-col items-start gap-4 bg-bg ">
      <div className="header w-full h-[48px] flex justify-between items-center self-stretch">
        <div
          id="user"
          className="w-max h-max flex px-4 py-2 items-center gap-3 rounded-sm bg-logInBoxColor"
        >
          <p className="userName overflow-hidden text-borderColor text-ellipsis font-poppins text-md font-semibold leading-line3">
            Mane Manukyan
          </p>
          <div className="flex p-2 items-center gap-[10px] rounded-lg bg-slate-100">
            <img src="/icons/logout.svg" alt="" className="w-[16px] h-[16px]" />
          </div>
        </div>
        <div id="actions" className="w-[659px] h-max flex items-center gap-3">
          <SearchInput />
          <SelectComponent />
          <Button name={"New Product"} />
        </div>
      </div>
      <div className="header flex items-center justify-between w-full h-max py-3 px-6 gap-6 self-stretch  border-b-[1px]">
        <p className="w-[64px] flex flex-col justify-center items-center gap-[10px] ">
          Image
        </p>
        <p className="w-[235px] flex flex-col justify-center items-start gap-[10px] ">
          Product Name
        </p>
        <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
          SKU
        </p>
        <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
          Category
        </p>
        <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
          Price
        </p>
        <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
          Stock Quantity
        </p>
        <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
          Status
        </p>

        <Link
          href={""}
          className="w-[80px] flex flex-col justify-center items-center gap-[10px] "
        >
          <Button name={"CSV"} />
        </Link>
      </div>
      {Array.isArray(products.data.items) && products.data.items.length > 0 ? (
        products.data.items.map((product: any, index: number) => (
          <Product
            key={index}
            name={product.name}
            image={product.image}
            sku={product.sku}
            quantity={product.quantity}
            category={product.category}
            price={product.price}
          />
        ))
      ) : (
        <li>No products available</li>
      )}
    </div>
  );
}
