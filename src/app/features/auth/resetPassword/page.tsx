import Button from "@/app/common/components/buttons";
import Input from "@/app/common/components/inputs/page";

export default function createNewPassword() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-bg">
      <div className="flex w-[400px] h-max p-6 flex-col items-center shrink-0 bg-logInBoxColor rounded-sm gap-6">
        <p className="text-textColor text-center font-poppins text-lg1 normal font-medium leading-line3">
          Enter new password
        </p>
        <Input placeholder="Password" text={"password"} />
        <Button name="Reset password" backgroundColor="#0B97A7" />
      </div>
    </div>
  );
}
