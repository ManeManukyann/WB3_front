import Button from "../../buttons";

interface DescriptionProps {
  name: string;
  description: string;
}

export default function FillProductDescription({
  description,
}: DescriptionProps) {
  return (
    <>
      <div className="w-full h-[188px] p-4 border border-borderColor rounded-md">
        <p>{description}</p>
      </div>
      <div className="buttons w-full h-max p-2 flex justify-end items-start self-stretch gap-2">
        <Button
          name={"Back"}
          backgroundColor={"#0F16170D"}
          textColor={"#0E373C"}
        />
        <Button name={"Add"} backgroundColor={"#0B97A7"} />
      </div>
    </>
  );
}
