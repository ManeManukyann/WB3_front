import Status from "../statuses/page";

interface ProductProps {
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
}: ProductProps) {
  return (
    <div className="w-full h-max flex py-3 px-6 items-center gap-6 justify-between self-stretch border-b-[1px]">
      <img
        src={image}
        alt=""
        className="w-[64px] h-[64px] rounded-md bg-white"
      />
      <p className="overflow-hidden text-textColor text-ellipsis font-poppins text-md normal font-regular leading-line3 w-[250px]">
        {name}
      </p>
      <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
        {sku}
      </p>
      <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
        {category}
      </p>
      <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
        {price}
      </p>
      <p className="w-[249px] flex flex-col justify-center items-center gap-[10px] ">
        {quantity}
      </p>
      <div className="flex w-[249px] flex-col justify-center items-center gap-[10px]">
        <Status quantity={quantity} />
      </div>
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