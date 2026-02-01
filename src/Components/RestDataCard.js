import { Link } from "react-router-dom";

export default function RestDataCard({ data }) {
  return (
    <Link to={"/city/saharanpur/" + data?.id}>
      <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">

        <img
          className="w-full h-40 sm:h-44 object-cover rounded-xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            data?.cloudinaryImageId
          }
        />

        <div className="w-[95%] mx-auto mt-4">
          <div className="font-bold text-lg sm:text-xl">
            {data.name}
          </div>

          <div className="flex items-center gap-2 text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-green-600 shrink-0"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24
                l-7.19-.61L12 2 9.19 8.63
                2 9.24l5.46 4.73L5.82 21z" />
            </svg>

            <span>{data.avgRating}</span>
            <span className="text-gray-500">•</span>
            <span>{data.sla.slaString}</span>
          </div>

          <div className="text-gray-600 text-sm sm:text-base overflow-hidden">
            {data.cuisines.join(" ")}
          </div>

          <div className="text-gray-600 text-sm sm:text-base overflow-hidden">
            {data.areaName}
          </div>
        </div>

      </div>
    </Link>
  );
}
