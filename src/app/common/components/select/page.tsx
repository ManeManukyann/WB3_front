"use client";
import React, { useState } from "react";

export default function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      id="options"
      value={selectedOption}
      onChange={handleSelectChange}
      className="border  border-dark rounded-md px-4 py-3 text-gray-300"
    >
      <option value="" disabled>
        Select
      </option>{" "}
      <option value="option1">In Stock</option>
      <option value="option2">Low Stock</option>
      <option value="option3">Out of Stock</option>
    </select>
  );
}
