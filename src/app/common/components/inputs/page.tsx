"use client";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputProps {
  text: string;
  placeholder: string;
  name?: string;
}

export default function Input({ text, placeholder, name }: InputProps) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="relative flex items-center">
      <input
        type={show && text === "password" ? "text" : text}
        placeholder={placeholder}
        name={name}
        autoComplete="off"
        className="h-12 w-full rounded-xl border border-dark py-2 pl-3 pr-[10.75rem] text-left placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      {text === "password" && (
        <p onClick={handleClick} className="absolute right-3 cursor-pointer">
          {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </p>
      )}
    </div>
  );
}
