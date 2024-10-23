import Button from "../../buttons";

interface DescriptionProps {
  name: string;
  description: string;
}

export default function FillProductDescription({ description }: DescriptionProps) {
  return (
    <>
      <div className="h-[188px] w-full rounded-md border border-borderColor p-4">
        <p>{description}</p>
      </div>
      <div className="buttons flex h-max w-full items-start justify-end gap-2 self-stretch p-2">
        <Button name={"Back"} backgroundColor={"#0F16170D"} textColor={"#0E373C"} />
        <Button name={"Add"} backgroundColor={"#0B97A7"} />
      </div>
    </>
  );
}
