/* eslint-disable @next/next/no-img-element */
"use client";

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import Modal from "../modal/page";
import FillProductDescription from "../productDescription/page";

interface ProductInformationProps {
  id: number;
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
  description
}: ProductInformationProps) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="flex h-max w-[560px] flex-col gap-6 rounded-md border bg-white p-5 shadow-lg">
        <div className="flex items-start justify-between">
          <h1 className="h-[26px] w-[205px] text-[20px] font-semibold leading-line1 text-borderColor">{name}</h1>
          <div className="h-max w-[30px] rounded-lg bg-iconDivColor px-2 py-2" onClick={onClose}>
            <img src="/icons/x.svg" alt="" />
          </div>
        </div>
        <TabGroup>
          <TabList className="flex-center flex h-[32px] w-[100%] items-center justify-between self-stretch pb-10">
            <Tab className="flex h-[20px] w-[163px] items-center justify-center border-b-[1px] px-3 py-[6px]">Details</Tab>
            <Tab className="flex h-[20px] w-[163px] items-center justify-center border-b-[1px] px-3 py-[6px]">Description</Tab>
            <Tab className="flex h-[20px] w-[163px] items-center justify-center border-b-[1px] px-3 py-[6px]">History</Tab>
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
              <FillProductDescription name={"Product Description"} description={description} />
            </TabPanel>
            <TabPanel>History</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
