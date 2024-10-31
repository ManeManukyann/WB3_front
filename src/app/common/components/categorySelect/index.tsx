"use client";

import { useEffect, useState } from "react";

interface CategoryProps {
  onChange?: (value: string) => void;
}

export default function CategorySelect({ onChange }: CategoryProps) {
  const localHost = process.env.NEXT_PUBLIC_LOCAL_HOST;
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const getAllCategories = async () => {
    const response = await fetch(`${localHost}/categories/`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    });

    const data = await response.json();
    if (!response.ok) {
      if (data.meta.error.message === "Unknown error") {
        setError("Something went wrong, please try again.");
      } else {
        setError(data.meta.error.message);
      }
    }
    const options = data.data.categories;
    return options;
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch {
        setError(error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e: any) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <>
      <select
        onChange={handleChange}
        value={value}
        className="inputsss flex h-12 w-full items-center gap-3 self-stretch rounded-xl border border-dark py-3 pl-4 pr-[47px] text-left text-gray-300"
      >
        <option value={""} disabled>
          Category
        </option>
        {categories.map((category: any) => (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        ))}
      </select>
      <p>{error}</p>
    </>
  );
}
