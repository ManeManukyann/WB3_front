"use client";

import Button from "@/app/common/components/buttons";
import Input from "@/app/common/components/inputs/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [error, setError] = useState("");
  const router = useRouter();
  const doPostRequestFromSignup = async () => {
    const inputs = document.querySelectorAll<HTMLInputElement>(".inputsss");
    const values = Array.from(inputs).map(input => input.value);

    const response = await fetch("http://localhost:3003/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        fullname: values[0],
        email: values[1],
        password: values[2]
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    const token = data.data.token;
    localStorage.setItem("token", token);

    if (response.ok) {
      router.push("/features/products/getAllProducts");
    } else if (!values[0] || !values[1] || !values[2]) {
      setError("All fields are required");
    } else if (data.meta.error.message === "Unknown error") {
      setError("Something went wrong, please try again.");
    } else {
      setError(data.meta.error.message);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-bg">
      <div className="flex h-max w-[400px] max-w-[90%] shrink-0 flex-col items-center gap-6 rounded-sm bg-logInBoxColor p-6 sm:max-w-[500px]">
        <p className="normal text-center font-poppins text-lg font-medium leading-line3 text-textColor">Registration</p>
        <div className="inputsss xs: flex h-auto w-full flex-col items-start gap-3 self-stretch xl:h-[124px] xl:w-[352px]">
          <Input placeholder="Full Name" text={"text"} />
          <Input placeholder="Email" text={"email"} />
          <Input placeholder="Password" text={"password"} />
        </div>
        <p className="text-red">{error}</p>
        <Button name="Sign Up" backgroundColor="#0B97A7" onClick={doPostRequestFromSignup} />
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
