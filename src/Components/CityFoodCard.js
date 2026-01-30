export default function CityFoodCard({ food }) {
  return (
    <a href={food.link} className="block">
      <div className="h-[72px] flex items-center justify-center rounded-xl border border-gray-300 text-sm font-medium text-gray-800 hover:shadow-md hover:border-gray-400 transition">
        {food.text}
      </div>
    </a>
  );
}
