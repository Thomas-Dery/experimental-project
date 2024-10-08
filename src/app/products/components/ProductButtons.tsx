import { ProductButtonsProps } from "@/interfaces/ProductInterfaces";

export const ProductButtons = ({
  counter,
  increaseBy,
}: ProductButtonsProps) => {
  return (
    <div className="flex items-center justify-center  bg-yellow-300 text-black border-red-700 border-[2px] rounded-[15px]">
      <button
        onClick={() => increaseBy(+1)}
        className="py-2 px-3 border-r-red-700 border-r-[1px]"
      >
        +
      </button>
      <div className="py-2 px-3">{counter}</div>
      <button
        onClick={() => increaseBy(-1)}
        className="py-2 px-3 border-l-red-700 border-l-[1px]"
      >
        -
      </button>
    </div>
  );
};
