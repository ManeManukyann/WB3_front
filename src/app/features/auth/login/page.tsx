"use client";
import Input from "@/app/common/components/inputs/page";
import Button from "@/app/common/components/buttons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogIn() {
  const router = useRouter();
  const [error, setError] = useState("");
  const doPostRequestFromLogin = async () => {
    const inputs = document.querySelectorAll<HTMLInputElement>(".inputsss");
    const values = Array.from(inputs).map(input => input.value);

    const response = await fetch("http://localhost:3003/auth/login", {
      method: "POST",
      body: JSON.stringify({
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
    } else if (data.meta.error.message === "Unknown error") {
      setError("Something went wrong, please try again.");
    } else {
      setError(data.meta.error.message);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-bg">
      <div className="flex h-max w-[400px] shrink-0 flex-col items-center gap-6 rounded-sm bg-logInBoxColor p-6">
        <p className="normal text-center font-poppins text-lg font-medium leading-line3 text-textColor">Login</p>
        <div className="inputsss flex h-[124px] w-[352px] flex-col items-start gap-3 self-stretch">
          <Input placeholder="Email" text={"email"} />
          <Input placeholder="Password" text={"password"} />
        </div>
        <p className="hideP pb-2 text-center text-red">{error}</p>
        <Button name="Login" backgroundColor="#0B97A7" onClick={doPostRequestFromLogin} />
        <Link href={"/features/auth/forgetPassword"} className="text-sm text-medium">
          Forget Password?
        </Link>
        <p className="text-md">
          If you do not have account yet, please{" "}
          <Link href={"/features/auth/registration"} className="text-sm text-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
