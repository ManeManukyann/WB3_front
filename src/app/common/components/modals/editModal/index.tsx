/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Button from "../../buttons";
import Input from "../../inputs";
import CategorySelect from "../../categorySelect";
interface EditModalProps {
  id: number;
  name: string;
  productNameProps: string;
  skuProps: string;
  titleProps: string;
  priceProps: number;
  quantityProps: number;
  descriptionProps: string;
  imageProps: string;
  isVisible?: boolean;
  onClose: () => void;
}

export default function EditProduct({
  id,
  name,
  productNameProps,
  skuProps,
  titleProps,
  priceProps,
  quantityProps,
  imageProps,
  descriptionProps,
  onClose
}: EditModalProps) {
  const localHost = process.env.NEXT_PUBLIC_LOCAL_HOST;
  const [productName, setProductName] = useState(productNameProps);
  const [sku, setSku] = useState(skuProps);
  const [price, setPrice] = useState(String(priceProps));
  const [quantity, setQuantity] = useState(String(quantityProps));
  const [description, setDescription] = useState(descriptionProps);
  const [categoryId, setCategoryId] = useState(titleProps);
  const [error, setError] = useState("");
  const [newImage, setNewImage] = useState(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setNewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const editProduct = async (id: number) => {
    const token = localStorage.getItem("token");
    const formData = new FormData();

    if (productName !== productNameProps) formData.append("name", productName);
    if (sku !== skuProps) formData.append("sku", sku);
    if (categoryId !== titleProps) formData.append("category_id", categoryId);
    if (price !== String(priceProps)) formData.append("price", price);
    if (quantity !== String(quantityProps)) formData.append("quantity", quantity);
    if (description !== descriptionProps) formData.append("description", description);

    const imageInput = document.querySelector<HTMLInputElement>('input[type="file"]');
    if (imageInput && imageInput.files && imageInput.files[0]) {
      formData.append("image", imageInput.files[0]);
    }

    const response = await fetch(`${localHost}/products/${id}`, {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();

    if (response.ok && onClose) {
      onClose();
      setTimeout(() => {
        window.location.reload();
      }, 0);
    } else if (data.meta.error.message === "Unknown error") {
      setError("Something went wrong, please try again");
    } else {
      setError(data.meta.error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="flex h-max w-[560px] flex-col gap-6 rounded-md border bg-white p-5 shadow-lg">
        <div className="flex items-start justify-between">
          <h1 className="h-[26px] w-[205px] text-[20px] font-semibold leading-line1 text-borderColor">{name}</h1>
          <div className="h-max w-[30px] rounded-lg bg-iconDivColor px-2 py-2" onClick={onClose}>
            <img src="/icons/x.svg" alt="" />
          </div>
        </div>

        <div className="flex h-max w-full items-start gap-3 self-stretch">
          <label className="image-upload relative flex h-[287px] w-[268px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-gray-300">
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            {newImage ? (
              <img id="output" src={newImage} className="absolute h-max object-cover" alt="Selected product" />
            ) : (
              <img
                id="current"
                src={`${localHost}/${imageProps}`}
                className="absolute h-max object-cover"
                alt="placeholder icon"
              />
            )}
          </label>

          <div className="details flex h-[268px] w-[280px] flex-col items-start gap-[7px]">
            <Input text={"text"} placeholder={"Name"} value={productName} onChange={e => setProductName(e.target.value)} />
            <Input text={"text"} placeholder={"SKU"} value={sku} onChange={e => setSku(e.target.value)} />
            <CategorySelect onChange={(e: string) => setCategoryId(e)} />
            <Input text={"number"} placeholder={"Price"} value={price} onChange={e => setPrice(e.target.value)} />
            <Input text={"number"} placeholder={"Stock Quantity"} value={quantity} onChange={e => setQuantity(e.target.value)} />
          </div>
        </div>

        <textarea
          className="h-[188px] w-full rounded-md border border-borderColor p-4"
          onChange={e => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <p className="text-red">{error}</p>
        <div className="buttons flex h-max w-full items-start justify-end gap-2 self-stretch p-2" onClick={onClose}>
          <Button name={"Cancel"} backgroundColor={"#0F16170D"} textColor="#0E373C" onClick={() => onClose} />
          <Button name={"Save"} backgroundColor={"#0B97A7"} onClick={() => editProduct(id)} />
        </div>
      </div>
    </div>
  );
}
