"use client";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputProps {
  text: string;
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ text, placeholder, name, value, onChange }: InputProps) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="relative flex w-full items-center">
      <input
        type={show && text === "password" ? "text" : text}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="inputsss flex h-12 w-full items-center gap-3 self-stretch rounded-xl border border-dark px-4 py-3 text-left placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      {text === "password" && (
        <p onClick={handleClick} className="absolute right-3 cursor-pointer">
          {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </p>
      )}
    </div>
  );
}
