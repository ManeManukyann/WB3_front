import Status from "../statuses/page";

interface ProduuctProps {
  image: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  quantity: number;
}

export default function Product({
  image,
  name,
  sku,
  category,
  price,
  quantity,
}: ProduuctProps) {
  let statusColor;

  if (quantity > 4 && quantity < 10) {
    statusColor = "#FFBB1E";
  } else if (quantity < 4 && quantity >= 0) {
    statusColor = "#FE125F";
  } else {
    statusColor = "#00CE72";
  }

  return (
    <div className="w-full h-max flex py-3 px-6 items-center gap-6 justify-between self-stretch border-b-[1px]">
      <img
        src={image}
        alt=""
        className="w-[64px] h-[64px] rounded-md bg-white"
      />
      <p className="overflow-hidden text-textColor text-ellipsis font-poppins text-md normal font-regular leading-line3">
        {name}
      </p>
      <p>{sku}</p>
      <p>{category}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      <Status quantity={quantity} />
      <div className="w-[104px] h-[32px] flex items-start gap-1">
        <div className="w-full h-max  px-2 py-2 bg-iconDivColor rounded-lg">
          <img src="/icons/info.svg" alt="" />
        </div>
        <div className="w-full h-max  px-2 py-2 bg-iconDivColor rounded-lg">
          <img src="/icons/edit.svg" alt="" />
        </div>
        <div className="w-full h-max  px-2 py-2 bg-iconDivColor rounded-lg">
          <img src="/icons/delete.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
