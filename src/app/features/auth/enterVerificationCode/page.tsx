"use client";
import Button from "@/app/common/components/buttons";
import Input from "@/app/common/components/inputs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EnterVerificationCode() {
  const localHost = process.env.NEXT_PUBLIC_LOCAL_HOST;
  const router = useRouter();
  const [error, setError] = useState("");
  const verificateCode = async () => {
    const inputs = document.querySelectorAll<HTMLInputElement>(".inputsss");
    const values = Array.from(inputs).map(input => input.value || "");
    const verificationToken = localStorage.getItem("verificationToken");

    const response = await fetch(`${localHost}/auth/check-code`, {
      method: "POST",
      body: JSON.stringify({
        code: values[1]
      }),
      headers: {
        Authorization: `Bearer ${verificationToken}`,
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    localStorage.setItem("reset_token", data.data.reset_token);

    if (response.ok) {
      router.push("/features/auth/resetPassword");
    } else if (data.meta.error === "Unknown error") {
      setError("Something went wrong, please try again.");
    } else {
      setError(data.meta.error.message);
    }
  };
  return (
    <div className="flex h-screen w-full items-center justify-center bg-bg">
      <div className="flex h-max w-[400px] max-w-[90%] shrink-0 flex-col items-center gap-6 rounded-sm bg-logInBoxColor p-6 sm:max-w-[500px]">
        <p className="normal text-center font-poppins text-lg1 font-medium leading-line3 text-textColor">
          Enter the code you received by email
        </p>
        <div className="inputsss xs: flex h-auto w-full flex-col items-start gap-3 self-stretch xl:h-[124px] xl:w-[352px]">
          <Input placeholder="Enter your code" text="text" />
        </div>
        <p className="text-red">{error}</p>
        <Button name="Send" backgroundColor={"#0B97A7"} onClick={verificateCode} />
      </div>
    </div>
  );
}
