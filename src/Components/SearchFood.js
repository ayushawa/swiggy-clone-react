import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SearchFood() {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [restData, setRestData] = useState([]);

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

    if (food && food.length > 1) {
      fetchData();
    }
  }, [food, id]);

  return (
    <div className="w-[95%] sm:w-[80%] mx-auto mt-10 sm:mt-20">
      <input
        className="w-full px-4 sm:pl-10 py-3 sm:py-4 text-lg sm:text-2xl bg-gray-200 rounded-2xl"
        placeholder="Search here"
        onChange={(e) => setFood(e.target.value)}
      />
    </div>
  );
}





