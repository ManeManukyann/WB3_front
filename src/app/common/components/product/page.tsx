// /* eslint-disable @next/next/no-img-element */
// "use client";
// import Status from "../statuses/page";
// import { useState } from "react";
// import EditProduct from "../modals/editModal/page";
// import ProductInformation from "../modals/infoModal/page";
// import DeleteProduct from "../modals/deleteModal/page";

// interface ProductProps {
//   id: number;
//   image: string;
//   name: string;
//   sku: string;
//   title: string;
//   price: number;
//   quantity: number;
//   status: string;
//   description: string;
// }

// export default function Product({ id, image, name, sku, title, price, quantity, status, description }: ProductProps) {
//   const [activeModal, setActiveModal] = useState<"info" | "edit" | "delete" | null>(null);

//   return (
//     <>
//       <div className="flex h-[90px] w-full items-center justify-between gap-6 self-stretch border-b-[1px] px-6 pb-2">
//         <img src={`http://localhost:3003/${[image]}`} alt="" className="h-max w-[64px] rounded-md bg-white" />
//         <p className="normal w-[250px] overflow-hidden text-ellipsis font-poppins text-md font-regular leading-line3 text-textColor">
//           {name}
//         </p>
//         <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">{sku}</p>
//         <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">{title}</p>
//         <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">{price}</p>
//         <p className="flex w-[249px] flex-col items-center justify-center gap-[10px]">{quantity}</p>
//         <div className="flex w-[249px] flex-col items-center justify-center gap-[10px]">
//           <Status quantity={quantity} />
//         </div>
//         <div className="flex h-[32px] w-[104px] items-start gap-1">
//           <div className="h-[32px] w-[100px] rounded-lg bg-iconDivColor px-2 py-2" onClick={() => setActiveModal("info")}>
//             <img src="/icons/info.svg" alt="Info" className="h-max w-full" />
//           </div>
//           <div className="h-[32px] w-[100px] rounded-lg bg-iconDivColor px-2 py-2" onClick={() => setActiveModal("edit")}>
//             <img src="/icons/edit.svg" alt="Edit" className="h-max w-full" />
//           </div>
//           <div className="h-[32px] w-[100px] rounded-lg bg-iconDivColor px-2 py-2" onClick={() => setActiveModal("delete")}>
//             <img src="/icons/delete.svg" alt="Delete" className="h-max w-full" />
//           </div>
//         </div>
//       </div>

//       {activeModal === "info" && (
//         <ProductInformation
//           id={id}
//           isVisible={true}
//           onClose={() => setActiveModal(null)}
//           name={"Product Information"}
//           sku={sku}
//           quantity={quantity}
//           price={price}
//           title={title}
//           status={status}
//           productName={name}
//           image={image}
//           description={description}
//         />
//       )}

//       {activeModal === "edit" && (
//         <EditProduct
//           isVisible={true}
//           name={"Edit Product"}
//           productNameProps={name}
//           skuProps={sku}
//           titleProps={title}
//           priceProps={price}
//           quantityProps={quantity}
//           imageProps={image}
//           onClose={async () => setActiveModal(null)}
//           id={id}
//           descriptionProps={description}
//         />
//       )}

//       {activeModal === "delete" && <DeleteProduct isVisible={true} onClose={async () => setActiveModal(null)} productId={id} />}
//     </>
//   );
// }

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
      <div className="sm:gap-0sm:px-1 flex h-[90px] w-full items-center justify-between self-stretch border-b-[1px] pb-2 md:gap-6 md:px-6">
        <img
          src={`http://localhost:3003/${[image]}`}
          alt=""
          className="rounded-md bg-white xs:hidden sm:block sm:h-[40px] sm:w-[40px] md:h-max md:w-[64px]"
        />
        <p className="normal overflow-hidden text-ellipsis font-poppins text-md font-regular leading-line3 text-textColor sm:w-[100px] sm:items-start md:w-[250px]">
          {name}
        </p>
        <p className="flex flex-col justify-center sm:w-[100px] sm:items-start md:w-[249px] md:items-center">{sku}</p>
        <p className="flex flex-col justify-center gap-[10px] sm:w-[100px] sm:items-start md:w-[249px] md:items-center">
          {title}
        </p>
        <p className="flex flex-col justify-center gap-[10px] sm:w-[100px] sm:items-start md:w-[249px] md:items-center">
          {price}
        </p>
        <p className="flex flex-col justify-center gap-[10px] sm:w-[100px] sm:items-start md:w-[249px] md:items-center">
          {quantity}
        </p>
        <div className="flex flex-col justify-center gap-[10px] xs:hidden sm:items-start md:block md:w-[249px] md:items-center">
          <Status quantity={quantity} />
        </div>
        <div className="flex items-start gap-1 sm:h-[32px] sm:w-[104px]">
          <div className="rounded-lg bg-iconDivColor px-2 py-2 sm:h-[32px] sm:w-[100px]" onClick={() => setActiveModal("info")}>
            <img src="/icons/info.svg" alt="Info" className="h-max w-full" />
          </div>
          <div
            className="rounded-lg bg-iconDivColor px-2 py-2 xs:hidden sm:block sm:h-[32px] sm:w-[100px]"
            onClick={() => setActiveModal("edit")}
          >
            <img src="/icons/edit.svg" alt="Edit" className="h-max w-full" />
          </div>
          <div
            className="rounded-lg bg-iconDivColor px-2 py-2 xs:hidden sm:block sm:h-[32px] sm:w-[100px]"
            onClick={() => setActiveModal("delete")}
          >
            <img src="/icons/delete.svg" alt="Delete" className="h-max w-full" />
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
