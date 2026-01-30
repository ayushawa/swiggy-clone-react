import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import MenuCard from "./MenuCard";
export default function RestaurantMenu(){
        const [restData,setRestData] = useState([]);
        
        const {id}  = useParams();
        useEffect(()=>{
               async function fetchData(){
                try{
                    const proxyServer = "https://cors-anywhere.herokuapp.com/"; 
                    const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.9654&lng=77.5428&restaurantId=${id}&submitAction=ENTER`;
                    const res = await fetch(proxyServer+swiggyAPI);
                    const data = await res.json();
                    const tempdata = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                    const filterData = tempdata.filter((items)=>'title' in items?.card?.card);
                    console.log(filterData);
                    setRestData(filterData);
                }
                
                 
                 catch(error){
                        console.log(error);
                 }
                }
                fetchData();
        },[id])

        console.log(id);
        return (
                <div className="w-3xl mx-auto">
                        {
                                restData.map((data)=><MenuCard key={data?.card?.card?.title} data={data?.card?.card}></MenuCard>)
                        }
                </div>
                
                
        )
    
}

