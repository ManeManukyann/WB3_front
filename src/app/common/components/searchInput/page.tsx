import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  return (
    <div className="relative flex items-center">
      <input
        placeholder="Search"
        className="h-12 w-[248px] flex py-3 px-4 items-center gap-3 self-stretch rounded-xl border border-dark text-left placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />

      <p className="absolute right-3 cursor-pointer">
        <CiSearch />
      </p>
    </div>
  );
}
