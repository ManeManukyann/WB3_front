"use client";
import Input from "@/app/common/components/inputs/page";
import Button from "@/app/common/components/buttons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LogIn() {
  const router = useRouter();
  const doPostRequestFromLogin = async () => {
    const inputs = document.querySelectorAll<HTMLInputElement>(".inputsss");
    const values = Array.from(inputs).map((input) => input.value);
    console.log(values);

    const response = await fetch("http://localhost:3003/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: values[1],
        password: values[2],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      router.push("/features/products/getAllProducts");
    } else {
      alert("Login error");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-bg">
      <div className="flex w-[400px] h-max p-6 flex-col items-center shrink-0 bg-logInBoxColor rounded-sm gap-6">
        <p className="text-textColor text-center font-poppins text-lg normal font-medium leading-line3">
          Login
        </p>
        <div className="inputsss w-[352px] h-[124px] flex flex-col items-start gap-3 self-stretch ">
          <Input placeholder="Email" text={"email"} />
          <Input placeholder="Password" text={"password"} />
        </div>
        <p className="hideP hidden text-red-500">
          Something went wrong, please try again
        </p>
        <Button
          name="Login"
          backgroundColor="#0B97A7"
          onClick={doPostRequestFromLogin}
        />
        <Link
          href={"/features/auth/forgetPassword"}
          className="text-medium text-sm"
        >
          Forget Password?
        </Link>
        {/* Fill in this part */}
        <p className="text-md">
          If you don't have account yet, please{" "}
          <Link
            href={"/features/auth/registration"}
            className="text-medium text-sm"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
