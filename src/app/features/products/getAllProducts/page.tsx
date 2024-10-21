"use client";
import { useEffect, useState } from "react";
import Button from "@/app/common/components/buttons";
import SelectComponent from "@/app/common/components/select/page";
import SearchInput from "@/app/common/components/searchInput/page";
import Product from "@/app/common/components/product/page";
import Link from "next/link";
import Logout from "@/app/common/components/modals/logoutModal/page";
import CreateProductModal from "@/app/common/components/modals/newProductModal/page";
import Pagination from "@etchteam/next-pagination";
import ReactPaginate from "react-paginate";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface NewProductProps {
  name: string;
  sku: string;
  quantity: number;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const getAllProducts = async () => {
  try {
    const response = await fetch(`http://localhost:3003/products/`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    return { data: { items: [], pages: 0 } };
  }
};

export default function ProductsTable({
  name,
  sku,
  quantity,
  category,
  price,
  image,
  description,
}: NewProductProps) {
  const [products, setProducts] = useState({ data: { items: [], pages: 0 } });
  const [activeModal, setActiveModal] = useState<
    "logout" | "addProduct" | null
  >(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const handlePrevClick = () => {
    console.log(1);
  };

  const handleNextClick = () => {
    console.log(2);
  };

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
          <div
            className="flex p-2 items-center gap-[10px] rounded-lg bg-slate-100"
            onClick={() => setActiveModal("logout")}
          >
            <img src="/icons/logout.svg" alt="" className="w-[16px] h-[16px]" />
          </div>
        </div>
        <div id="actions" className="w-[659px] h-max flex items-center gap-3">
          <SearchInput />
          <SelectComponent />
          <Button
            name={"New Product"}
            backgroundColor="#0B97A7"
            onClick={() => setActiveModal("addProduct")}
          />
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
          <Button name={"CSV"} backgroundColor="#0B97A7" />
        </Link>
      </div>
      {Array.isArray(products.data.items) && products.data.items.length > 0 ? (
        products.data.items.map((product: any, index: number) => (
          <Product
            id={product.id}
            key={index}
            name={product.name}
            image={product.image}
            sku={product.sku}
            quantity={product.quantity}
            title={product.title}
            price={product.price}
            status={product.status}
            description={product.description}
          />
        ))
      ) : (
        <li>No products available</li>
      )}
      <div className="w-full h-[100px] flex justify-end items-center">
        <ReactPaginate
          pageCount={products.data.pages}
          className="w-[300px] flex justify-between"
          nextLabel={
            <AiOutlineRight
              className="mt-1"
              onClick={handleNextClick}
            ></AiOutlineRight>
          }
          previousLabel={
            <AiOutlineLeft
              className="mt-1"
              onClick={handlePrevClick}
            ></AiOutlineLeft>
          }
        />
      </div>
      {activeModal === "logout" && (
        <Logout onClose={async () => setActiveModal(null)} isVisible={true} />
      )}
      {activeModal === "addProduct" && (
        <CreateProductModal
          onClose={async () => setActiveModal(null)}
          isVisible={true}
          name={"Add new product"}
          productNameProps={name}
          skuProps={sku}
          categoryProps={category}
          priceProps={0}
          quantityProps={0}
          imageProps={image}
        />
      )}
    </div>
  );
}
