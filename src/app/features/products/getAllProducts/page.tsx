/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Button from "@/app/common/components/buttons";
import SelectComponent from "@/app/common/components/select/page";
import SearchInput from "@/app/common/components/searchInput";
import Product from "@/app/common/components/product/page";
import Link from "next/link";
import Logout from "@/app/common/components/modals/logoutModal/page";
import CreateProductModal from "@/app/common/components/modals/addNewProduct/page";
import Pagination from "@/app/common/components/pagination/page";

export const getAllProducts = async (page: number, query = "") => {
  try {
    const response = await fetch(`http://localhost:3003/products?page=${page}&query=${query}`, {
      method: "GET"
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
  return { data: { items: [], pages: 0 } };
};

export default function ProductsTable() {
  const downloadCSV = async () => {
    const response = await fetch("http://localhost:3003/export-csv/");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inventory.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  const [products, setProducts] = useState({ data: { items: [], pages: 0 } });
  const [activeModal, setActiveModal] = useState<"logout" | "addProduct" | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [debounced, setDebounced] = useState("");
  const itemsPerPage = 7;

  const pagesData: number[] = [];
  for (let i = 1; i < products.data.pages + 1; i++) {
    pagesData.push(i);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(query);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts(currentPage, debounced);
      setProducts(productsData);
    };

    fetchProducts();
  }, [currentPage, debounced]);

  const [fullname, setFullname] = useState<string | null>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const setName = localStorage.getItem("fullname");
      setFullname(setName);
    }
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-start gap-4 bg-bg py-4 pl-4 pr-6">
      <div className="header flex h-[48px] w-full items-center justify-between self-stretch">
        <div id="user" className="flex h-max w-max items-center gap-3 rounded-sm bg-logInBoxColor px-4 py-2">
          <p className="userName overflow-hidden text-ellipsis font-poppins text-md font-semibold leading-line3 text-borderColor">
            {fullname}
          </p>
          <div className="flex items-center gap-[10px] rounded-lg bg-slate-100 p-2" onClick={() => setActiveModal("logout")}>
            <img src="/icons/logout.svg" alt="" className="h-[16px] w-[16px]" />
          </div>
        </div>
        <div id="actions" className="flex h-max w-[659px] items-center gap-3">
          <SearchInput value={query} onChange={setQuery} />
          <SelectComponent value={selectedStatus} onChange={newValue => setSelectedStatus(newValue)} />
          <Button name={"New Product"} backgroundColor="#0B97A7" onClick={() => setActiveModal("addProduct")} />
        </div>
      </div>
      <div className="header flex h-max w-full items-center justify-between gap-6 self-stretch border-b-[1px] px-6 py-3">
        <p className="flex w-[64px] flex-col items-center justify-center gap-[10px]">Image</p>
        <p className="flex w-[235px] flex-col items-start justify-center gap-[10px]">Product Name</p>
        <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">SKU</p>
        <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">Category</p>
        <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">Price</p>
        <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">Stock Quantity</p>
        <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">Status</p>

        <Link href={""} className="flex w-[80px] flex-col items-center justify-center gap-[10px]">
          <Button name={"CSV"} backgroundColor="#0B97A7" onClick={downloadCSV} />
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

      {activeModal === "logout" && <Logout onClose={() => setActiveModal(null)} isVisible={true} />}
      {activeModal === "addProduct" && (
        <CreateProductModal onClose={() => setActiveModal(null)} isVisible={true} name={"Add product"} />
      )}
      <div className="flex h-max w-full items-center justify-end">
        <Pagination
          isHorizontal
          isVertical={false}
          containerClass="custom-container"
          arrowClass="custom-arrow"
          currentPage={currentPage}
          totalPages={Math.ceil(products.data.pages / itemsPerPage)}
          pageItemClass="custom-page-item"
          activeClass="active-page"
          activeTextClass="active-text"
          textClass="page-text"
          displayedPagesQuartet={pagesData}
          updatePage={(pageNumber: any) => setCurrentPage(pageNumber)}
          goPreviousPage={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))}
          goNextPage={() => setCurrentPage(next => (next < 1 ? next + 1 : next))}
        />
      </div>
    </div>
  );
}
