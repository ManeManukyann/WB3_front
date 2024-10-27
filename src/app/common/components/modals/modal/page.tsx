/* eslint-disable @next/next/no-img-element */
"use client";

import Status from "../../statuses/page";
import DeleteProduct from "../deleteModal/page";
import EditProduct from "../editModal/page";
import { useState } from "react";

interface ModalProps {
  name: string;
  id: number;
  image: string;
  productName: string;
  sku: string;
  title: string;
  price: number;
  quanitity: number;
  status: string;
  description: string;
}

export default function Modal({ image, productName, sku, title, price, quanitity, id, description }: ModalProps) {
  const [activateModal, setActivateModal] = useState<"edit" | "delete" | null>(null);
  return (
    <>
      <div className="flex h-[188px] w-[full] items-start gap-5 self-stretch">
        <div>
          <img src={`http://localhost:3003/${[image]}`} alt="" className="h-max w-[188px] rounded-md" />
        </div>
        <div className="flex h-[188px] w-[352px] flex-col items-start gap-3">
          <div className="flex h-[20px] w-full min-w-[200px] items-center justify-between self-stretch">
            <p className="font-sm normal font-poppins font-regular leading-line4 text-modalDescription">Name</p>
            <p className="normal text-right font-poppins text-md font-semibold leading-line3 text-textColor">{productName}</p>
          </div>
          <div className="flex h-[20px] w-full min-w-[200px] items-center justify-between self-stretch">
            <p className="font-sm normal font-poppins font-regular leading-line4 text-modalDescription">SKU</p>
            <p className="normal text-right font-poppins text-md font-semibold leading-line3 text-textColor">{sku}</p>
          </div>
          <div className="flex h-[20px] w-full min-w-[200px] items-center justify-between self-stretch">
            <p className="font-sm normal font-poppins font-regular leading-line4 text-modalDescription">title</p>
            <p className="normal text-right font-poppins text-md font-semibold leading-line3 text-textColor">{title}</p>
          </div>
          <div className="flex h-[20px] w-full min-w-[200px] items-center justify-between self-stretch">
            <p className="font-sm normal font-poppins font-regular leading-line4 text-modalDescription">Price</p>
            <p className="normal text-right font-poppins text-md font-semibold leading-line3 text-textColor">{price}</p>
          </div>
          <div className="flex h-[20px] w-full min-w-[200px] items-center justify-between self-stretch">
            <p className="font-sm normal font-poppins font-regular leading-line4 text-modalDescription">Stock Quantity</p>
            <p className="normal text-right font-poppins text-md font-semibold leading-line3 text-textColor">{quanitity}</p>
          </div>
          <div className="flex h-[20px] w-full min-w-[200px] items-center justify-between self-stretch">
            <p className="font-sm normal font-poppins font-regular leading-line4 text-modalDescription">Status</p>
            <p>
              <Status quantity={Number(quanitity)} />
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-[63.4px] w-full items-start justify-end gap-2 self-stretch pt-5">
        <div className="h-max w-[30px] rounded-lg bg-iconDivColor px-2 py-2" onClick={() => setActivateModal("edit")}>
          <img src="/icons/edit.svg" alt="" />
        </div>
        <div className="h-max w-[30px] rounded-lg bg-iconDivColor px-2 py-2" onClick={() => setActivateModal("delete")}>
          <img src="/icons/delete.svg" alt="" />
        </div>
      </div>
      {activateModal === "edit" && (
        <EditProduct
          isVisible={true}
          name={"Edit Product"}
          productNameProps={productName}
          skuProps={sku}
          titleProps={title}
          priceProps={price}
          quantityProps={quanitity}
          imageProps={image}
          onClose={async () => setActivateModal(null)}
          id={id}
          descriptionProps={description}
        />
      )}
      {activateModal === "delete" && (
        <DeleteProduct isVisible={true} onClose={async () => setActivateModal(null)} productId={id} />
      )}
    </>
  );
}
