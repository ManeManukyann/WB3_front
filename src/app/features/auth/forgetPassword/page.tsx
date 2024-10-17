"use client";
import Button from "@/app/common/components/buttons";
import Input from "@/app/common/components/inputs/page";
import Link from "next/link";

export default function ForgetPassword() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-bg">
      <div className="flex w-[400px] h-max p-6 flex-col items-center shrink-0 bg-logInBoxColor rounded-sm gap-6">
        <p className="text-textColor text-center font-poppins text-lg normal font-medium leading-line3">
          Forget Password
        </p>
        <div className="w-[352px] h-max flex flex-col items-start gap-3 self-stretch ">
          <Input placeholder="Email" text={"email"} />
        </div>
        <Link href="/features/auth/enterVerificationCode" className="w-full">
          <Button name="Send" backgroundColor="#0B97A7" />
        </Link>
      </div>
    </div>
  );
}
