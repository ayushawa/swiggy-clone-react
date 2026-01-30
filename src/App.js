import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurant from "./Components/Restaurant";
import Home from "./Components/Home";
import RestaurantMenu from "./Components/RestaurantMenu"

function App(){
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
            <Route path="/city/saharanpur/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        </Routes>
        </BrowserRouter>
        
        
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>)