import RestInfo from "./RestInfo";
import { useState } from "react";

export default function MenuCard({ data, foodSelected }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!data?.itemCards) return null;

  if (!isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <p className="text-xl sm:text-3xl font-bold mb-4">
            {data.title}
          </p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-2xl sm:text-3xl transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ⌄
          </button>
        </div>
        <div className="h-5 bg-gray-300 mt-2 mb-2"></div>
      </div>
    );
  }

  const filteredItems =
    foodSelected === "veg"
      ? data.itemCards.filter(
          (food) => "isVeg" in food?.card?.info
        )
      : foodSelected === "nonveg"
      ? data.itemCards.filter(
          (food) => !("isVeg" in food?.card?.info)
        )
      : data.itemCards;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full">
        <p className="text-xl sm:text-3xl font-bold mb-4">
          {data.title}
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-2xl sm:text-3xl transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ⌄
        </button>
      </div>

      <div>
        {filteredItems.map((items) => (
          <RestInfo
            key={items?.card?.info?.id}
            restData={items?.card?.info}
          />
        ))}
      </div>

      <div className="h-5 bg-gray-300 mt-2 mb-2"></div>
    </div>
  );
}
