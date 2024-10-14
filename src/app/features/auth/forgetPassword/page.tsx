"use client";
import Button from "@/app/common/components/buttons";
import Input from "@/app/common/components/inputs/page";
import { useRouter } from "next/navigation";

export default function ForgetPassword() {
  const router = useRouter();

  const handleResetPassword = () => {
    router.push("./login.tsx");
  };

  return (
    <div className="flex justify-center items-center w-full h-[902px] bg-bg">
      <div className="flex w-[400px] h-max p-6 flex-col items-center shrink-0 bg-logInBoxColor rounded-sm gap-6">
        <p className="text-textColor text-center font-poppins text-lg normal font-medium leading-line3">
          Forget Password
        </p>
        <Input placeholder="Email" text="text" />
        <Button name="Reset password" codeInput={handleResetPassword} />
      </div>
    </div>
  );
}
