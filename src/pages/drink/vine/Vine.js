import React from "react";
import "./Vine.css"
import DataMenu from "../../../DataMenu/DataMenu.js";

const Vine = () => {

    const falseDataVine = DataMenu.falseDataVine;
    

    return(

        <div className="vine">
        <h2>Вино</h2>
        <div className="header-vine">
            <p className="header-vine-name">Назва</p>
            <p className="header-vine-about">Опис</p>
            <p className="header-vine-volume">Об'єм</p>
            <p className="header-vine-price">Ціна</p>
        </div>
        <div className="this-vine">
            {falseDataVine.map((vine, index) => (
                <div key={index} className="vine-item">
                    <p className="header-vine-name">{vine.name}</p>
                    <p className="header-vine-about">{vine.about}</p>
                    <p className="header-vine-volume">{vine.volume}</p>
                    <p className="header-vine-price">{vine.price}</p>
                </div>
            ))}
        </div>
    </div>

    )

}

export default Vine;