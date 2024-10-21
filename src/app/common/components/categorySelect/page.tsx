"use client";

interface SelectProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
import { useEffect, useState } from "react";

export default function CategorySelect({ onChange }: SelectProps) {
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const response = await fetch(`http://localhost:3003/categories/`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const options = data.data.categories;
    return options;
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <select
      onChange={handleSelectChange}
      value={value}
      className="inputsss flex h-12 w-full items-center gap-3 self-stretch rounded-xl border border-dark pl-4 pr-[47px] py-3 text-left text-gray-300"
    >
      <option value="" disabled>
        Category
      </option>
      {categories.map((category: any) => (
        <option key={category.id} value={category.id}>
          {category.title}
        </option>
      ))}
    </select>
  );
}
