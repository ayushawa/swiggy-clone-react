import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
  return (
    <>
      <div className="w-[95%] sm:w-[85%] lg:w-[80%] container mx-auto flex flex-wrap mt-10 gap-4 justify-center">
        {imageGridCards.map((foodData) => (
          <FoodCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </>
  );
}
