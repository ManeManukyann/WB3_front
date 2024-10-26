/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import DeleteProduct from "../deleteModal/page";
import EditProduct from "../editModal/page";

interface DescriptionProps {
  name: string;
  description: string;
  productName: string;
  sku: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  id: number;
}

export default function ReadProductDescription({
  description,
  productName,
  sku,
  title,
  price,
  quantity,
  id,
  image
}: DescriptionProps) {
  const [activeModal, setActiveModal] = useState<"edit" | "delete" | null>(null);
  return (
    <>
      <div className="h-[188px] w-full rounded-md border border-borderColor p-4">
        <p>{description}</p>
      </div>
      <div className="flex h-[63.4px] w-full items-start justify-end gap-2 self-stretch pt-5">
        <div className="h-max w-[30px] rounded-lg bg-iconDivColor px-2 py-2" onClick={() => setActiveModal("edit")}>
          <img src="/icons/edit.svg" alt="" />
        </div>
        <div className="h-max w-[30px] rounded-lg bg-iconDivColor px-2 py-2" onClick={() => setActiveModal("delete")}>
          <img src="/icons/delete.svg" alt="" />
        </div>
      </div>
      {activeModal === "edit" && (
        <EditProduct
          isVisible={true}
          name={"Edit Product"}
          productNameProps={productName}
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
