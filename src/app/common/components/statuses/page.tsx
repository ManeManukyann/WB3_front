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
    <div
      className="w-max h-max px-3 py-1 flex justify-center items-center gap-[10px] rounded-[40px]"
      style={{ backgroundColor }}
    >
      <span className="text-logInBoxColor font-poppins text-md normal font-regular leading-line3">
        {name}
      </span>
    </div>
  );
}
