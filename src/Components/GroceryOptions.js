import { GroceryGridCard } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard.js";

export default function GroceryOptions() {
  return (
    <div className="mt-10 sm:mt-20 container mx-auto w-[95%] sm:w-[85%] lg:w-[80%]">
      <h1 className="text-xl sm:text-2xl font-bold">
        Shop Groceries on Instamart
      </h1>

      <div className="mt-6 sm:mt-20 flex flex-nowrap overflow-x-auto gap-6 sm:gap-10">
        {GroceryGridCard.map((grocery) => (
          <GroceryCard key={grocery.id} grocery={grocery} />
        ))}
      </div>
    </div>
  );
}

