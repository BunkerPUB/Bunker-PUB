import React from "react";
import "./HotDishes.css";
import DataMenu from "../../../DataMenu/DataMenu.js";


const HotDishes = () => {

const falseDataHotDishes = DataMenu.falseDataHotDishes;

return (

    <div className="hot-dishes">
        <h2>Гарячі страви</h2>
        <div className="header-hot-dishes">
            <p className="header-hot-dishes-name">Назва</p>
            <p className="header-hot-dishes-about">Опис</p>
            <p className="header-hot-dishes-volume">Вага/г.</p>
            <p className="header-hot-dishes-price">Ціна</p>
        </div>
        <div className="this-hot-dishes">
            {falseDataHotDishes.map((hotDishes, index) => (
                <div key={index} className="hot-dishes-item">
                    <p className="header-hot-dishes-name">{hotDishes.name}</p>
                    <p className="header-hot-dishes-about">{hotDishes.about}</p>
                    <p className="header-hot-dishes-volume">{hotDishes.volume}</p>
                    <p className="header-hot-dishes-price">{hotDishes.price}</p>
                </div>
            ))}
        </div>
    </div>

)


}
export default HotDishes;