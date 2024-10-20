"use client";

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import Link from "next/link";
import Modal from "../modal/page";
import FillProductDescription from "../newProductDescription/page";

interface ProductInformationProps {
  name: string;
  productName: string;
  image: string;
  sku: string;
  quantity: number;
  price: number;
  title: string;
  status: string;
  description: string;
  isVisible?: boolean;
  onClose: () => void;
}

export default function ProductInformation({
  isVisible,
  onClose,
  name,
  productName,
  image,
  sku,
  quantity,
  price,
  title,
  status,
  description,
}: ProductInformationProps) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center flex-col">
      <div className="flex flex-col p-5 border w-[560px] h-max shadow-lg rounded-md bg-white gap-6 ">
        <div className="flex items-start justify-between ">
          <h1 className="w-[205px] h-[26px] text-borderColor text-[20px] font-semibold leading-line1">
            {name}
          </h1>
          <Link href="/">
            <div
              className="w-[30px] h-max  px-2 py-2 bg-iconDivColor rounded-lg"
              onClick={onClose}
            >
              <img src="/icons/x.svg" alt="" />
            </div>
          </Link>
        </div>
        <TabGroup>
          <TabList className="w-[100%] h-[32px] flex justify-between flex-center self-stretch items-center pb-10    ">
            <Tab className="w-[163px] h-[20px] flex px-3 py-[6px] justify-center items-center  border-b-[1px] ">
              Details
            </Tab>
            <Tab className="w-[163px] h-[20px] flex px-3 py-[6px] justify-center items-center  border-b-[1px]">
              Description
            </Tab>
            <Tab className="w-[163px] h-[20px] flex px-3 py-[6px] justify-center items-center  border-b-[1px]">
              History
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Modal
                name={"Product Information"}
                image={image}
                productName={productName}
                sku={sku}
                title={title}
                price={price}
                quanitity={quantity}
                status={status}
              />
            </TabPanel>
            <TabPanel>
              <FillProductDescription name={"name"} description={description} />
            </TabPanel>
            <TabPanel>History</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
