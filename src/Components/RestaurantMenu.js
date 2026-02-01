import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

export default function RestaurantMenu() {
  const [restData, setRestData] = useState([]);
  const { id } = useParams();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.9654&lng=77.5428&restaurantId=${id}&submitAction=ENTER`;
        const res = await fetch(proxyServer + swiggyAPI);
        const data = await res.json();
        const tempdata =
          data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filterData = tempdata.filter(
          (items) => "title" in items?.card?.card
        );
        setRestData(filterData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="w-[95%] sm:w-[80%] mx-auto mt-10 sm:mt-20 mb-10 sm:mb-20">
        <Link to={`/city/saharanpur/${id}/search`}>
          <p className="w-full text-center py-3 sm:py-4 rounded-2xl bg-gray-200 text-lg sm:text-2xl">
            Search for Dishes
          </p>
        </Link>
      </div>

      <div className="w-[95%] sm:w-[80%] mx-auto mb-10 flex flex-wrap gap-4">
        <button
          className={`text-lg sm:text-2xl py-2 px-6 border rounded-2xl ${
            selected === "veg" ? "bg-green-500" : "bg-gray-300"
          }`}
          onClick={() =>
            setSelected(selected === "veg" ? null : "veg")
          }
        >
          Veg
        </button>

        <button
          className={`text-lg sm:text-2xl py-2 px-6 border rounded-2xl ${
            selected === "nonveg" ? "bg-red-500" : "bg-gray-300"
          }`}
          onClick={() =>
            setSelected(selected === "nonveg" ? null : "nonveg")
          }
        >
          Non Veg
        </button>
      </div>

      <div className="w-[95%] sm:w-[80%] mx-auto">
        {restData.map((data) => (
          <MenuCard
            key={data?.card?.card?.title}
            foodSelected={selected}
            data={data?.card?.card}
          />
        ))}
      </div>
    </div>
  );
}


