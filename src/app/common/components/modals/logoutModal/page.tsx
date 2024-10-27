import Link from "next/link";
import Button from "../../buttons";
interface DeleteProductProps {
  isVisible?: boolean;
  onClose: () => void;
}

export default function Logout({ isVisible, onClose }: DeleteProductProps) {
  if (!isVisible) return null;
  const handleDelete = () => {
    localStorage.getItem("token");
    localStorage.removeItem("token");
  };
  return (
    <div className="fixed inset-0 flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
      <div
        className="flex h-max w-[270px] flex-col items-start gap-6 rounded-md1 border bg-white px-4 pb-4 pt-6 shadow-lg"
        onClick={onClose}
      >
        <p className="normal h-max w-full self-stretch text-center font-poppins text-md font-regular leading-line3 text-textColor">
          Do you want to log out?
        </p>
        <div className="flex w-full items-start justify-end gap-2 self-stretch">
          <Button name={"No, cancel"} backgroundColor={"#0F16170D"} textColor="#0E373C" />
          <Link href={"/"}>
            <Button name={"Yes, logout"} backgroundColor={"#FE125F"} onClick={handleDelete} />
          </Link>
        </div>
      </div>
    </div>
  );
}
