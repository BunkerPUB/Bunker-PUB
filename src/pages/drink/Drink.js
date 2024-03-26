import React, { useState } from "react";
import "./Drink.css"
import Vine from "./vine/Vine";
import FireDrink from "./fireDrink/FireDrink";
import FreeDrink from "./freeDrink/FreeDrink";
import Alcohol from "./alcohol/Alcohol";
import Coctel from "./coctel/Coctel";
import Beer from "./beer/Beer";
import Shota from "./shota/Shota"
import arrow from "../../img/icon/arrowback.svg"

const Drink = () =>{
    const [selectedCategory, setSelectedCategory] = useState("Сети");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    return(
        <div className="drink">
            <div className="continer">
                <div className="menu-content">
                <a className="arrow" href="/menu"><img src={arrow} alt="arrow"/>Повернутись назад</a>
                    <div className="category-menu-drink">
                        {/* <a onClick={() => handleCategoryClick("Пиво")}>Пиво</a> */}
                        <a onClick={() => handleCategoryClick("Вино")}>Вино</a>
                        <a onClick={() => handleCategoryClick("Коктейлі")}>Коктейлі</a>
                        <a onClick={() => handleCategoryClick("Залпові коктейлі")}>Залпові коктейлі</a>
                        <a onClick={() => handleCategoryClick("Алкогольні напої")}>Алкогольні напої</a>
                        <a onClick={() => handleCategoryClick("Безалкогольні напої")}>Безалкогольні напої</a>
                        <a onClick={() => handleCategoryClick("Сети")}>Сети</a>
                    </div>
                    <div className="content-menu-drink">
                        {/* {selectedCategory === "Пиво" && <Beer />} */}
                        {selectedCategory === "Вино" && <Vine />}
                        {selectedCategory === "Коктейлі" && <Coctel />}
                        {selectedCategory === "Залпові коктейлі" && <FireDrink />}
                        {selectedCategory === "Алкогольні напої" && <Alcohol />}
                        {selectedCategory === "Безалкогольні напої" && <FreeDrink />}
                        {selectedCategory === "Сети" && <Shota />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Drink;
