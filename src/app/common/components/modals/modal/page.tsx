"use client";

import Link from "next/link";
import Status from "../../statuses/page";

interface ModalProps {
  name: string;
  image: string;
  productName: string;
  sku: string;
  title: string;
  price: number;
  quanitity: number;
  status: string;
}

export default function Modal({
  image,
  productName,
  sku,
  title,
  price,
  quanitity,
}: ModalProps) {
  return (
    <>
      <div className="w-full h-[188px] flex items-start gap-5 self-stretch">
        <div>
          <img
            src={`http://localhost:3003/${[image]}`}
            alt=""
            className="w-[188px] h-[188px] rounded-md"
          />
        </div>
        <div className="w-[352px] h-[188px] flex flex-col items-start gap-3 ">
          <div className="w-full h-[20px] flex min-w-[200px] justify-between items-center self-stretch ">
            <p className="text-modalDescription font-poppins font-sm normal font-regular leading-line4">
              Name
            </p>
            <p className="text-textColor text-right font-poppins text-md normal font-semibold leading-line3">
              {productName}
            </p>
          </div>
          <div className="w-full h-[20px] flex min-w-[200px] justify-between items-center self-stretch ">
            <p className="text-modalDescription font-poppins font-sm normal font-regular leading-line4">
              SKU
            </p>
            <p className="text-textColor text-right font-poppins text-md normal font-semibold leading-line3">
              {sku}
            </p>
          </div>
          <div className="w-full h-[20px] flex min-w-[200px] justify-between items-center self-stretch ">
            <p className="text-modalDescription font-poppins font-sm normal font-regular leading-line4">
              title
            </p>
            <p className="text-textColor text-right font-poppins text-md normal font-semibold leading-line3">
              {title}
            </p>
          </div>
          <div className="w-full h-[20px] flex min-w-[200px] justify-between items-center self-stretch ">
            <p className="text-modalDescription font-poppins font-sm normal font-regular leading-line4">
              Price
            </p>
            <p className="text-textColor text-right font-poppins text-md normal font-semibold leading-line3">
              {price}
            </p>
          </div>
          <div className="w-full h-[20px] flex min-w-[200px] justify-between items-center self-stretch ">
            <p className="text-modalDescription font-poppins font-sm normal font-regular leading-line4">
              Stock Quantity
            </p>
            <p className="text-textColor text-right font-poppins text-md normal font-semibold leading-line3">
              {quanitity}
            </p>
          </div>
          <div className="w-full h-[20px] flex min-w-[200px] justify-between items-center self-stretch ">
            <p className="text-modalDescription font-poppins font-sm normal font-regular leading-line4">
              Status
            </p>
            <p>
              <Status quantity={Number(quanitity)} />
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[63.4px] flex justify-end items-start gap-2 self-stretch pt-5">
        <div className="w-[30px] h-max  px-2 py-2 bg-iconDivColor rounded-lg">
          <img src="/icons/edit.svg" alt="" />
        </div>
        <div className="w-[30px] h-max  px-2 py-2 bg-iconDivColor rounded-lg">
          <img src="/icons/delete.svg" alt="" />
        </div>
      </div>
    </>
  );
}
