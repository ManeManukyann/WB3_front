"use client";
import Button from "@/app/common/components/buttons";
import Input from "@/app/common/components/inputs/page";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgetPassword() {
  const router = useRouter();
  const [error, setError] = useState("");
  const sendCodeToEmail = async () => {
    const inputs = document.querySelectorAll<HTMLInputElement>(".inputsss");
    const values = Array.from(inputs).map(input => input.value);

    const response = await fetch("http://localhost:3003/auth/forgetpassword", {
      method: "POST",
      body: JSON.stringify({
        email: values[0]
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();

    if (response.ok) {
      router.push("/features/auth/enterVerificationCode");
    } else {
      setError(data.meta.error.message);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-bg">
      <div className="flex h-max w-[400px] shrink-0 flex-col items-center gap-6 rounded-sm bg-logInBoxColor p-6">
        <p className="normal text-center font-poppins text-lg font-medium leading-line3 text-textColor">Forget Password</p>
        <div className="flex h-max w-[352px] flex-col items-start gap-3 self-stretch">
          <Input placeholder="Email" text={"email"} />
        </div>
        <p className="text-red">{error}</p>
        <Button name="Send" backgroundColor="#0B97A7" onClick={sendCodeToEmail} />
      </div>
    </div>
  );
}
