import Link from "next/link";
import Button from "../../buttons";
interface DeleteProductProps {
  isVisible?: boolean;
  onClose: () => {};
}

export default function DeleteProduct({
  isVisible,
  onClose,
}: DeleteProductProps) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center flex-col">
      <div
        className="flex flex-col items-start border w-[270px] h-max shadow-lg rounded-md1 bg-white gap-6 pt-6 px-4 pb-4 "
        onClick={onClose}
      >
        <p className="w-full h-max text-center font-poppins text-textColor text-md normal font-regular leading-line3 self-stretch">
          Do you want to remove the product?
        </p>
        <div className="w-full flex justify-end items-start gap-2 self-stretch">
          <Button
            name={"No, cancel"}
            backgroundColor={"#0F16170D"}
            textColor="#0E373C"
          />
          <Link href={"/"}>
            <Button name={"Yes, remove"} backgroundColor={"#FE125F"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
