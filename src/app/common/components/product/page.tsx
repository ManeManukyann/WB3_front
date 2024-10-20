"use client";
import Status from "../statuses/page";
import { useState } from "react";
import EditModal from "../modals/editModal/page";
import ProductInformation from "../modals/infoModal/page";
import DeleteProduct from "../modals/deleteModal/page";

interface ProductProps {
  image: string;
  name: string;
  sku: string;
  title: string;
  price: number;
  quantity: number;
  status: string;
  description: string;
}

export default function Product({
  image,
  name,
  sku,
  title,
  price,
  quantity,
  status,
  description,
}: ProductProps) {
  const [activeModal, setActiveModal] = useState<
    "info" | "edit" | "delete" | null
  >(null);

  return (
    <>
      <div className="w-full h-max flex py-3 px-6 items-center gap-6 justify-between self-stretch border-b-[1px]">
        <img
          src={`http://localhost:3003/${[image]}`}
          alt=""
          className="w-[64px] h-[64px] rounded-md bg-white"
        />
        <p className="overflow-hidden text-textColor text-ellipsis font-poppins text-md normal font-regular leading-line3 w-[250px]">
          {name}
        </p>
        <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
          {sku}
        </p>
        <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
          {title}
        </p>
        <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
          {price}
        </p>
        <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
          {quantity}
        </p>
        <div className="flex w-[249px] flex-col justify-center items-center gap-[10px]">
          <Status quantity={quantity} />
        </div>
        <div className="w-[104px] h-[32px] flex items-start gap-1">
          <div
            className="w-full h-max px-2 py-2 bg-iconDivColor rounded-lg"
            onClick={() => setActiveModal("info")}
          >
            <img src="/icons/info.svg" alt="Info" />
          </div>
          <div
            className="w-full h-max px-2 py-2 bg-iconDivColor rounded-lg"
            onClick={() => setActiveModal("edit")}
          >
            <img src="/icons/edit.svg" alt="Edit" />
          </div>
          <div
            className="w-full h-max px-2 py-2 bg-iconDivColor rounded-lg"
            onClick={() => setActiveModal("delete")}
          >
            <img src="/icons/delete.svg" alt="Delete" />
          </div>
        </div>
      </div>

      {activeModal === "info" && (
        <ProductInformation
          isVisible={true}
          onClose={() => setActiveModal(null)}
          name={"Product Information"}
          sku={sku}
          quantity={quantity}
          price={price}
          title={title}
          status={status}
          productName={name}
          image={image}
          description={description}
        />
      )}

      {activeModal === "edit" && (
        <EditModal
          isVisible={true}
          name={"Edit Product"}
          productNameProps={name}
          skuProps={sku}
          titleProps={title}
          priceProps={price}
          quantityProps={quantity}
          imageProps={image}
          onClose={async () => setActiveModal(null)}
        />
      )}

      {activeModal === "delete" && (
        <DeleteProduct
          isVisible={true}
          onClose={async () => setActiveModal(null)}
        />
      )}
    </>
  );
}
