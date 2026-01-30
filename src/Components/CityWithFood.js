import { useState } from "react";
import { CityFoodData } from "../Utils/CityFoodData";
import CityFoodCard from "./CityFoodCard";

export default function CityWithFood() {
  const [showAll, setShowAll] = useState(false);

  const visibleCities = showAll
    ? CityFoodData
    : CityFoodData.slice(0, 11);

  return (
    <div className="mt-20 mx-40">
      <h2 className="text-2xl font-bold mb-8">
        Cities with food delivery
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {visibleCities.map((food) => (
          <CityFoodCard key={food.link} food={food} />
        ))}

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="h-[72px] rounded-xl border border-gray-300 text-orange-500 font-semibold flex items-center justify-center hover:shadow-md transition"
          >
            Show More ↓
          </button>
        )}
      </div>
    </div>
  );
}

