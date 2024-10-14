import Input from "@/app/common/components/inputs/page";
import Button from "@/app/common/components/buttons";
import Link from "next/link";

export default function LogIn() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-bg">
      <div className="flex w-[400px] h-max p-6 flex-col items-center shrink-0 bg-logInBoxColor rounded-sm gap-6">
        <p className="text-textColor text-center font-poppins text-lg normal font-medium leading-line3">
          Login
        </p>
        <div className="w-[352px] h-[124px] flex flex-col items-start gap-3 self-stretch ">
          <Input placeholder="Email" text={"email"} />
          <Input placeholder="Password" text={"password"} />
        </div>
        {/* go to the main page, where display all products */}
        <Button name="Login" />
        <Link
          href={"/features/auth/forgetPassword"}
          className="text-medium text-sm"
        >
          Forget Password?
        </Link>
      </div>
    </div>
  );
}
