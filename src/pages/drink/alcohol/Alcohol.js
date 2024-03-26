import React from "react";
import "./Alcohol.css"
import DataMenu from "../../../DataMenu/DataMenu.js";

const Alcohol = () => {

    const falseDataAlcohol = DataMenu.falseDataAlcohol;

    return(

        <div className="alcohol">
        <h2>Алкогольні напої</h2>
        <div className="header-alcohol">
            <p className="header-alcohol-name">Назва</p>
            <p className="header-alcohol-about">Опис</p>
            <p className="header-alcohol-volume">Об'єм</p>
            <p className="header-alcohol-price">Ціна</p>
        </div>
        <div className="this-alcohol">
            {falseDataAlcohol.map((alcohol, index) => (
                <div key={index} className="alcohol-item">
                    <p className="header-alcohol-name">{alcohol.name}</p>
                    <p className="header-alcohol-about">{alcohol.about}</p>
                    <p className="header-alcohol-volume">{alcohol.volume}</p>
                    <p className="header-alcohol-price">{alcohol.price}</p>
                </div>
            ))}
        </div>
    </div>

    )

}

export default Alcohol;