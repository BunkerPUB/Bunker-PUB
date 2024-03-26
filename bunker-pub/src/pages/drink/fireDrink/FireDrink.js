import React from "react";
import "./FireDrink.css"
import DataMenu from "../../../DataMenu/DataMenu.js";

const FireDrink = () => {

    const falseDataFireDrink = DataMenu.falseDataFireDrink;
    
    return(

        <div className="fire-drink">
        <h2>Залпові коктейлі</h2>
        <div className="header-fire-drink">
            <p className="header-fire-drink-name">Назва</p>
            <p className="header-fire-drink-about">Опис</p>
            <p className="header-fire-drink-volume">Об'єм</p>
            <p className="header-fire-drink-price">Ціна</p>
        </div>
        <div className="this-fire-drink">
            {falseDataFireDrink.map((fireDrink, index) => (
                <div key={index} className="fire-drink-item">
                    <p className="header-fire-drink-name">{fireDrink.name}</p>
                    <p className="header-fire-drink-about">{fireDrink.about}</p>
                    <p className="header-fire-drink-volume">{fireDrink.volume}</p>
                    <p className="header-fire-drink-price">{fireDrink.price}</p>
                </div>
            ))}
        </div>
    </div>

    )

}

export default FireDrink;