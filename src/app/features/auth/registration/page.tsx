"use client";

import Button from "@/app/common/components/buttons";
import Input from "@/app/common/components/inputs/page";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-bg">
      <div className="flex w-max h-max p-6 flex-col items-center shrink-0 bg-logInBoxColor rounded-sm gap-6">
        <p className="text-textColor text-center font-poppins text-lg normal font-medium leading-line3">
          Registration
        </p>
        <div className="w-[352px] h-max flex flex-col items-start gap-3 self-stretch ">
          <Input placeholder="Full Name" text={"text"} />
          <Input placeholder="Email" text={"email"} />
          <Input placeholder="Password" text={"password"} />
        </div>
        <Button name="Sign Up" />
        <Link href="/features/auth/login">Log in</Link>
      </div>
    </div>
  );
}
