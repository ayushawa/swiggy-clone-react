import { useState, useEffect } from "react";
import RestDataCard from "./RestDataCard";
import FoodOption from "./FoodOption";
import Shimmer from "./Shimmer";

export default function Restaurant() {
  const [restData, setRestData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI =
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9654&lng=77.5428&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const resp = await fetch(proxyServer + swiggyAPI);
        const json = await resp.json();
        setRestData(json);
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    }
    fetchData();
  }, []);

  const restaurantList = restData?.data?.cards?.find(
    (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
  )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  if (!restData) return <Shimmer />;

  return (
    <>
      <FoodOption />

      <div className="flex flex-wrap justify-center w-[95%] sm:w-[85%] lg:w-[80%] mx-auto mt-10 sm:mt-20 gap-4 sm:gap-5">
        {restaurantList ? (
          restaurantList.map((res) => (
            <RestDataCard key={res.info.id} data={res.info} />
          ))
        ) : (
          <p>No restaurants found in this area.</p>
        )}
      </div>
    </>
  );
}
