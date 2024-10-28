/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @next/next/no-img-element */
"use client";
import Input from "../../inputs/page";
import { useEffect, useState } from "react";
import Button from "../../buttons";
import CategorySelect from "../../categorySelect/page";

interface CreateProductProps {
  name: string;
  onClose?: () => void;
  isVisible?: boolean;
}

export default function CreateProductModal({ name, onClose, isVisible }: CreateProductProps) {
  if (!isVisible) return null;
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setProductName(productName), setSku(sku), setTitle(title), setPrice(String(price));
    setQuantity(String(quantity)), setImage(image), setDescription(description);
  }, [productName, sku, title, price, quantity, image, onClose, description]);

  const addNewProduct = async () => {
    const token = localStorage.getItem("token");
    const inputs = document.querySelectorAll<HTMLInputElement>(".inputsss");
    const values = Array.from(inputs).map(input => input.value);

    if (!values[0] || !values[1] || !values[2] || !values[3] || !values[4] || !values[5]) {
      setError("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", values[0]);
    formData.append("sku", values[1]);
    formData.append("category_id", values[2]);
    formData.append("price", values[3]);
    formData.append("quantity", values[4]);
    formData.append("description", values[5]);

    const imageInput = document.querySelector<HTMLInputElement>('input[type="file"]');
    if (imageInput && imageInput.files && imageInput.files[0]) {
      formData.append("image", imageInput.files[0]);
    }

    const response = await fetch("http://localhost:3003/products/", {
      method: "POST",
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
      setError("Something went wrong, please try again.");
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
          <div className="imageFiled flex h-[268px] w-[268px] flex-col items-center justify-center gap-2 rounded-md px-4 py-3">
            <div>
              <label className="image-upload relative flex h-[287px] w-[268px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-gray-300">
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                {!image && (
                  <div id="placeholder" className="flex flex-col items-center justify-center text-gray-400">
                    <img src="/icons/image.svg" alt="placeholder icon" />
                    <span className="mt-2 text-sm">Product image</span>
                  </div>
                )}
                {image && (
                  <img id="output" src={image} className="absolute h-max w-full rounded-lg object-cover" alt="Selected product" />
                )}
              </label>
            </div>
          </div>

          <div className="details flex h-[268px] w-[280px] flex-col items-start gap-[7px]">
            <Input text={"text"} placeholder={"Name"} value={productName} onChange={e => setProductName(e.target.value)} />
            <Input text={"text"} placeholder={"SKU"} value={sku} onChange={e => setSku(e.target.value)} />
            <CategorySelect />
            <Input text={"text"} placeholder={"Price"} value={String(price)} onChange={e => setPrice(e.target.value)} />
            <Input
              text={"text"}
              placeholder={"Stock Quantity"}
              value={String(quantity)}
              onChange={e => setQuantity(e.target.value)}
            />
          </div>
        </div>
        <textarea
          name="Description"
          className="inputsss h-max min-h-[160px] rounded-md border border-textColor px-4 py-3"
          placeholder="Description"
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <p className="flex justify-center text-red">{error}</p>
        <div className="buttons flex h-max w-full items-start justify-end gap-2 self-stretch p-2">
          <Button name={"Cancel"} backgroundColor={"#0F16170D"} textColor={"#0E373C"} onClick={onClose} />
          <Button name={"Add"} backgroundColor={"#0B97A7"} onClick={addNewProduct} />
        </div>
      </div>
    </div>
  );
}
