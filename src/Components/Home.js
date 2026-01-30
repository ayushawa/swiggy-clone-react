import  Header from "./Header";
import FoodOption from "./FoodOption";
import GroceryOptions from "./GroceryOptions";
import Scanner from "./Scanner";
import CityWithFood from "./CityWithFood";
export default function Home(){
    return (
        <>
        <Header></Header>
        <FoodOption></FoodOption>
         <GroceryOptions></GroceryOptions>
        <Scanner></Scanner>
                
        <CityWithFood></CityWithFood>
        </>
    )
}