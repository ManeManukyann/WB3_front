import Button from "@/app/common/components/buttons";
import Input from "@/app/common/components/inputs/page";
import Link from "next/link";

export default function EnterVerificationCode() {
  return (
    <div className="flex justify-center items-center w-full h-[902px] bg-bg">
      <div className="flex w-[400px] h-max p-6 flex-col items-center shrink-0 bg-logInBoxColor rounded-sm gap-6">
        <p className="text-textColor text-center font-poppins text-lg1 normal font-medium leading-line3">
          Enter the code you received by email
        </p>
        <Input placeholder="Enter your code" text="text" />
        <Link href={"/features/auth/resetPassword"} className="w-full">
          <Button name="Send" />
        </Link>
      </div>
    </div>
  );
}
