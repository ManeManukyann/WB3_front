import Link from "next/link";
import Button from "../../buttons";

interface DescriptionProps {
  name: string;
}

export default function FillProductDescription({ name }: DescriptionProps) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center flex-col">
      <div className="flex flex-col p-5 border w-[560px] h-max shadow-lg rounded-md bg-white gap-6 ">
        <div className="flex items-start justify-between ">
          <h1 className="w-[205px] h-[26px] text-borderColor text-[20px] font-semibold leading-line1">
            {name}
          </h1>
          <Link href="/">
            <div className="w-[30px] h-max  px-2 py-2 bg-iconDivColor rounded-lg">
              <img src="/icons/x.svg" alt="" />
            </div>
          </Link>
        </div>
        <textarea
          className="w-full h-[300px] p-4 border border-borderColor rounded-md"
          placeholder="Description"
        />
        <div className="buttons w-full h-max p-2 flex justify-end items-start self-stretch gap-2">
          <Button
            name={"Back"}
            backgroundColor={"#0F16170D"}
            textColor={"#0E373C"}
          />
          <Button name={"Add"} backgroundColor={"#0B97A7"} />
        </div>
      </div>
    </div>
  );
}
