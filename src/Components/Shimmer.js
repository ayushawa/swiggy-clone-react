export default function Shimmer() {
  return (
    <div className="flex flex-wrap justify-center w-[95%] sm:w-[80%] mx-auto mt-10 sm:mt-20 gap-5">
      {Array(12).fill(0).map((_, index) => (
        <div key={index} className="w-[280px] mb-2">
          <div className="w-full h-40 sm:h-44 rounded-xl bg-gray-300"></div>

          <div className="w-[95%] mx-auto mt-3">
            <div className="w-full h-5 bg-gray-300"></div>
            <div className="w-full h-5 bg-gray-300 mt-2"></div>
            <div className="w-full h-5 bg-gray-300 mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
