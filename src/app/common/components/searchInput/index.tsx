/* eslint-disable @typescript-eslint/no-unused-expressions */
// Search input write here
"use client";
import { CiSearch } from "react-icons/ci";

interface Props {
  value: string;
  onChange(newValue: string): void;
}

export default function SearchInput({ value, onChange }: Props) {
  return (
    <div className="relative flex items-center">
      <input
        onChange={e => onChange(e.target.value)}
        placeholder={"Search"}
        className="flex h-12 w-[248px] items-center gap-3 self-stretch rounded-xl border border-dark px-4 py-3 pr-[32px] text-left placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        defaultValue={value}
      />
      <p className="absolute right-3 cursor-pointer">
        <CiSearch className="input" onClick={() => onChange(value)} />
      </p>
    </div>
  );
}
