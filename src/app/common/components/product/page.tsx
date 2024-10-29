/* eslint-disable @next/next/no-img-element */
"use client";
import Status from "../statuses/page";
import { useState } from "react";
import EditProduct from "../modals/editModal/page";
import ProductInformation from "../modals/infoModal/page";
import DeleteProduct from "../modals/deleteModal/page";

interface ProductProps {
  id: number;
  image: string;
  name: string;
  sku: string;
  title: string;
  price: number;
  quantity: number;
  status: string;
  description: string;
}

export default function Product({ id, image, name, sku, title, price, quantity, status, description }: ProductProps) {
  const [activeModal, setActiveModal] = useState<"info" | "edit" | "delete" | null>(null);

  return (
    <>
      <div className="flex h-[90px] w-full items-center justify-between gap-6 self-stretch border-b-[1px] px-6 pb-2">
        <img src={`http://localhost:3003/${[image]}`} alt="" className="h-max w-[64px] rounded-md bg-white" />
        <p className="normal w-[250px] overflow-hidden text-ellipsis font-poppins text-md font-regular leading-line3 text-textColor">
          {name}
        </p>
        <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">{sku}</p>
        <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">{title}</p>
        <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">{price}</p>
        <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">{quantity}</p>
        <div className="flex w-[249px] flex-col items-center justify-center gap-[10px]">
          <Status quantity={quantity} />
        </div>
        <div className="flex h-[32px] w-[104px] items-start gap-1">
          <div className="h-max w-full rounded-lg bg-iconDivColor px-2 py-2" onClick={() => setActiveModal("info")}>
            <img src="/icons/info.svg" alt="Info" />
          </div>
          <div className="h-max w-full rounded-lg bg-iconDivColor px-2 py-2" onClick={() => setActiveModal("edit")}>
            <img src="/icons/edit.svg" alt="Edit" />
          </div>
          <div className="h-max w-full rounded-lg bg-iconDivColor px-2 py-2" onClick={() => setActiveModal("delete")}>
            <img src="/icons/delete.svg" alt="Delete" />
          </div>
        </div>
      </div>

      {activeModal === "info" && (
        <ProductInformation
          id={id}
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
        <EditProduct
          isVisible={true}
          name={"Edit Product"}
          productNameProps={name}
          skuProps={sku}
          titleProps={title}
          priceProps={price}
          quantityProps={quantity}
          imageProps={image}
          onClose={async () => setActiveModal(null)}
          id={id}
          descriptionProps={description}
        />
      )}

      {activeModal === "delete" && <DeleteProduct isVisible={true} onClose={async () => setActiveModal(null)} productId={id} />}
    </>
  );
}
