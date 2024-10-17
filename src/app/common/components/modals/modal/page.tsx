"use client";

import Link from "next/link";
import Status from "../../statuses/page";

interface ModalProps {
  name: string;
  image?: string;
  productName?: string;
  sku?: string;
  category?: string;
  price?: number;
  quanitity?: number;
  status?: string;
}
export default function Modal({
  name,
  image,
  productName,
  sku,
  category,
  price,
  quanitity,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center flex-col">
      <div className="flex flex-col p-5 border w-[560px] h-max shadow-lg rounded-md bg-white gap-6 ">
        <div className="flex items-start justify-between ">
          <h1 className="w-[205px] h-[26px] text-borderColor text-[20px] font-semibold leading-line1">
            {name}
          </h1>
          <Link href="/">
            <div className="w-[30px] h-max  px-2 py-2 bg-iconDivColor rounded-lg">
              <img src="/icons/x.svg" alt="" />
            </div>
          </Link>
        </div>
        <div className="w-[100%] h-[32px] flex justify-between flex-center self-stretch items-center">
          <div className="w-[163px] h-[20px] flex px-3 py-[6px] justify-center items-center border-b-medium border-b-[1px]">
            <p className="overflow-hidden text-modalTextColor text-center text-ellipsis font-poppins text-md normal font-regular leading-line3">
              Details
            </p>
          </div>
          <div className="w-[163px] h-[20px] flex px-3 py-[6px] justify-center items-center border-b-[1px]">
            <p className="overflow-hidden text-modalTextColor text-center text-ellipsis font-poppins text-md normal font-regular leading-line3">
              Description
            </p>
          </div>
          <div className="w-[163px] h-[20px] flex px-3 py-[6px] justify-center items-center border-b-[1px]">
            <p className="overflow-hidden text-modalTextColor text-center text-ellipsis font-poppins text-md normal font-regular leading-line3">
              History
            </p>
          </div>
        </div>
        <div className="w-full h-[188px] flex items-start gap-5 self-stretch">
          <div>
            <img
              src={image}
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
                Category
              </p>
              <p className="text-textColor text-right font-poppins text-md normal font-semibold leading-line3">
                {category}
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
        <div className="w-full h-[40px] flex justify-end items-start gap-2 self-stretch">
          <div className="w-[30px] h-max  px-2 py-2 bg-iconDivColor rounded-lg">
            <img src="/icons/edit.svg" alt="" />
          </div>
          <div className="w-[30px] h-max  px-2 py-2 bg-iconDivColor rounded-lg">
            <img src="/icons/delete.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
