import Link from "next/link";
import Input from "../../inputs/page";
import { useEffect, useState } from "react";
import Button from "../../buttons";

interface EditModalProps {
  name: string;
  productNameProps: string;
  skuProps: string;
  titleProps: string;
  priceProps: number;
  quantityProps: number;
  imageProps: string;
  isVisible?: boolean;
  onClose: () => {};
}

export default function EditModal({
  name,
  productNameProps,
  skuProps,
  titleProps,
  priceProps,
  quantityProps,
  imageProps,
  onClose,
}: EditModalProps) {
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [title, settitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setProductName(productNameProps),
      setSku(skuProps),
      settitle(titleProps),
      setPrice(String(priceProps));
    setQuantity(String(quantityProps)), setImage(imageProps);
  }, [
    productNameProps,
    skuProps,
    titleProps,
    priceProps,
    quantityProps,
    imageProps,
  ]);

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

        <div className="w-full h-max flex items-start gap-3 self-stretch">
          <div className="imageFiled w-[268px] h-[268px] px-4 py-3 flex flex-col justify-center items-center gap-2 rounded-md relative">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="details w-[280px] h-[268px] flex flex-col items-start gap-[7px]">
            <Input
              text={"text"}
              placeholder={"Name"}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <Input
              text={"text"}
              placeholder={"SKU"}
              value={sku}
              onChange={(e) => setSku(e.target.value)}
            />
            <Input
              text={"text"}
              placeholder={"title"}
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
            <Input
              text={"text"}
              placeholder={"Price"}
              value={String(price)}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              text={"text"}
              placeholder={"Stock Quantity"}
              value={String(quantity)}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>

        <div
          className="buttons w-full h-max p-2 flex justify-end items-start self-stretch gap-2"
          onClick={onClose}
        >
          <Button
            name={"Cancel"}
            backgroundColor={"#0F16170D"}
            textColor="#0E373C"
          />
          <Button name={"Save"} backgroundColor={"#0B97A7"} />
        </div>
      </div>
    </div>
  );
}
