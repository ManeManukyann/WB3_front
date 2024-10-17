"use client";
interface ButtonProps {
  name: string;
  backgroundColor: string;
  textColor?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}

export default function Button({
  name,
  onClick,
  backgroundColor,
  textColor,
  width,
  height,
}: ButtonProps) {
  return (
    <button
      className="w-full flex px-8 py-3 flex-col justify-center items-center gap-3 self-stretch rounded-md"
      onClick={onClick}
      style={{ backgroundColor, width: width, height: height }}
    >
      <span
        className="text-logInBoxColor normal font-poppins text-md font-semibold leading-line3"
        style={{ color: textColor }}
      >
        {name}
      </span>
    </button>
  );
}
