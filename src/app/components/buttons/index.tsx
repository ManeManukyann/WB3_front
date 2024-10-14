"use client";
interface ButtonProps {
  name: string;
  codeInput?: () => void;
}

export default function Button({ name, codeInput }: ButtonProps) {
  return (
    <button
      className="w-[100%]  bg-medium flex px-8 py-3 flex-col justify-center items-center gap-3 self-stretch rounded-md"
      onClick={codeInput}
    >
      <span className="text-logInBoxColor normal font-poppins text-md font-semibold leading-line3">
        {name}
      </span>
    </button>
  );
}
