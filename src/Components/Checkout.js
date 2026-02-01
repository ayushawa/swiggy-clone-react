import { useSelector } from "react-redux";
import ItemCart from "./ItemCart";

export default function Checkout() {
  const items = useSelector(state => state.cartslice.items);

  const totalCost = items.reduce((sum, item) => {
    return sum + (item.price / 100) * item.quantity;
  }, 0);

  return (
    <div className="flex flex-col items-center">
      {items.map((value) => (
        <ItemCart key={value.id} data={value} />
      ))}

      <div className="bg-gray-400 mt-4 w-full sm:w-[60%] md:w-[40%] lg:w-[25%] rounded-2xl px-3 py-3">
        <p>Total cost : {totalCost}</p>
      </div>
    </div>
  );
}

