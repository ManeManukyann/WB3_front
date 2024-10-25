"use client";
import Button from "../../buttons";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteProductProps {
  isVisible?: boolean;
  onClose: () => void;
  productId: number;
}

export default function DeleteProduct({ onClose, productId }: DeleteProductProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleDelete = async (id: number) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`http://localhost:3003/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      setError(errorData.meta.error.message);
    } else {
      router.refresh();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="flex h-max w-[270px] flex-col items-start gap-6 rounded-md1 border bg-white px-4 pb-4 pt-6 shadow-lg">
        <p className="normal h-max w-full self-stretch text-center font-poppins text-md font-regular leading-line3 text-textColor">
          Do you want to remove the product?
        </p>
        <p>{error}</p>

        <div className="flex w-full items-start justify-end gap-2 self-stretch">
          <Button name={"No, cancel"} backgroundColor={"#0F16170D"} textColor="#0E373C" onClick={onClose} />
          <Button name={"Yes, remove"} backgroundColor={"#FE125F"} onClick={() => handleDelete(productId)} />
        </div>
      </div>
    </div>
  );
}
