import Button from "@/app/common/components/buttons";
import Input from "@/app/common/components/inputs/page";

export default function createNewPassword() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-bg">
      <div className="flex h-max w-[400px] shrink-0 flex-col items-center gap-6 rounded-sm bg-logInBoxColor p-6">
        <p className="normal text-center font-poppins text-lg1 font-medium leading-line3 text-textColor">Enter new password</p>
        <Input placeholder="Password" text={"password"} />
        <Button name="Reset password" backgroundColor="#0B97A7" />
      </div>
    </div>
  );
}
