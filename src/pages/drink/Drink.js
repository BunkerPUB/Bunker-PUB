import React, { useState } from "react";
import "./Drink.css"
import FireDrink from "./fireDrink/FireDrink";
import FreeDrink from "./freeDrink/FreeDrink";
import Alcohol from "./alcohol/Alcohol";
import Coctel from "./coctel/Coctel";
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
                        {/* <a onClick={() => handleCategoryClick("Вино")}>Вино</a> */}
                        <button type="button" onClick={() => handleCategoryClick("Коктейлі")}>Коктейлі</button>
                        <button type="button" onClick={() => handleCategoryClick("Залпові коктейлі")}>Залпові коктейлі</button>
                        <button type="button" onClick={() => handleCategoryClick("Алкогольні напої")}>Алкогольні напої</button>
                        <button type="button" onClick={() => handleCategoryClick("Безалкогольні напої")}>Безалкогольні напої</button>
                        <button type="button" onClick={() => handleCategoryClick("Сети")}>Сети</button>
                    </div>
                    <div className="content-menu-drink">
                        {/* {selectedCategory === "Пиво" && <Beer />} */}
                        {/* {selectedCategory === "Вино" && <Vine />} */}
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
