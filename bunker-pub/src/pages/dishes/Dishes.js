import React, { useState } from "react";
import "./Dishes.css";
import Snacks from "./snacks/Snacks";
import HotDishes from "./hotdishes/HotDishes";
import Sauces from "./sauces/Sauces";
import arrow from "../../img/icon/arrowback.svg"


const Dishes = () => {

    const [selectedCategory, setSelectedCategory] = useState("Гарячі страви");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

return(
    <div className="dishes">
        <div className="continer">
        <div className="menu-content">
        <a className="arrow" href="/menu"><img src={arrow} alt="arrow"/>Повернутись назад</a>
                    <div className="category-menu-dishes">
                        <a onClick={() => handleCategoryClick("Гарячі страви")}>Гарячі страви</a>
                        <a onClick={() => handleCategoryClick("Снеки")}>Снеки</a>
                        <a onClick={() => handleCategoryClick("Соуси")}>Соуси</a>
                    </div>
                    <div className="content-menu-dishes">
                        {selectedCategory === "Гарячі страви" && <HotDishes />}
                        {selectedCategory === "Снеки" && <Snacks />}
                        {selectedCategory === "Соуси" && <Sauces />}
                    </div>
                </div>
        </div>
    </div>

)

}

export default Dishes;