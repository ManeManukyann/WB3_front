interface StatusProps {
  quantity: number;
}

export default function Status({ quantity }: StatusProps) {
  let backgroundColor: string;
  let name: string;

  if (quantity === 0) {
    backgroundColor = "#FE125F";
    name = "Out of Stock";
  } else if (quantity < 6) {
    backgroundColor = "#FFBB1E";
    name = "Low Stock";
  } else {
    backgroundColor = "#00CE72";
    name = "In Stock";
  }

  return (
    <div className="flex h-max w-max items-center justify-center gap-[10px] rounded-[40px] px-3 py-1" style={{ backgroundColor }}>
      <p className="normal font-poppins text-md font-regular leading-line3 text-logInBoxColor">{name}</p>
    </div>
  );
}
