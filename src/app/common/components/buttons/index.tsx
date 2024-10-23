"use client";
interface ButtonProps {
  name: string;
  backgroundColor: string;
  textColor?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}

export default function Button({ name, onClick, backgroundColor, textColor, width, height }: ButtonProps) {
  return (
    <button
      className="flex w-full flex-col items-center justify-center gap-3 self-stretch rounded-md px-8 py-3"
      onClick={onClick}
      style={{ backgroundColor, width: width, height: height }}
    >
      <p className="normal font-poppins text-md font-semibold leading-line3 text-logInBoxColor" style={{ color: textColor }}>
        {name}
      </p>
    </button>
  );
}
