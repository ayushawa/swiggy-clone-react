import RestInfo from "./RestInfo";
import {useState,useEffect} from "react";

export default function MenuCard({ data }) {
    const [isOpen,setIsOpen] = useState(true);
    if (!data?.itemCards) return null;

    if(!isOpen){
        return (
            <div className="w-full ">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{data.title} </p>
            <button onClick={()=>setIsOpen(!isOpen)} className={`text-3xl mr-20 transition-transform duration-200 ${isOpen?"rotate-180":"rotate-0"}`}>⌄</button>

            </div>
            <div className="h-5 bg-gray-300 mmt-2 mb-2" ></div>
            </div>
            
        )
    }

    return (
        <div className="w-full ">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{data.title} </p>
            <button onClick={()=>setIsOpen(!isOpen)} className={`text-3xl mr-20 transition-transform duration-200 ${isOpen?"rotate-180":"rotate-0"}`}>⌄</button>
 
            </div>
            <div >
                {
                    data.itemCards.map((items) => (
                        <RestInfo key={items?.card?.info?.id} restData={items?.card?.info}/>
                    ))
                }
            </div>
            <div className="h-5 bg-gray-300 mt-2 mb-2" ></div>

        </div>
    );
}
