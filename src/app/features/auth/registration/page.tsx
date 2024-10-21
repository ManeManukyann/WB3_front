"use client";
// It isn't finish at all

import Button from "@/app/common/components/buttons";
import Input from "@/app/common/components/inputs/page";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const doPostRequestFromSignup = async () => {
    const inputs = document.querySelectorAll<HTMLInputElement>(".inputsss");
    const values = Array.from(inputs).map((input) => input.value);

    const response = await fetch("http://localhost:3003/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: values[1],
        password: values[2],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(await response.json());
    if (response.ok) {
      router.push("/features/products/getAllProducts");
    } else {
      alert("Login error");
    }
  };

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
        <Button
          name="Sign Up"
          backgroundColor="#0B97A7"
          onClick={doPostRequestFromSignup}
        />
        <p className="text-md">
          If you already have an account{" "}
          <Link href="/features/auth/login" className="text-md text-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
