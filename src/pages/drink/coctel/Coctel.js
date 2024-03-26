import React from "react";
import "./Coctel.css";
import DataMenu from "../../../DataMenu/DataMenu.js";

const Coctel = () => {

    const falseDataCoctel = DataMenu.falseDataCoctel;

    return(

        <div className="coctel">
        <h2>Коктейль</h2>
        <div className="header-coctel">
            <p className="header-coctel-name">Назва</p>
            <p className="header-coctel-about">Опис</p>
            <p className="header-coctel-volume">Об'єм</p>
            <p className="header-coctel-price">Ціна</p>
        </div>
        <div className="this-coctel">
            {falseDataCoctel.map((coctel, index) => (
                <div key={index} className="coctel-item">
                    <p className="header-coctel-name">{coctel.name}</p>
                    <p className="header-coctel-about">{coctel.about}</p>
                    <p className="header-coctel-volume">{coctel.volume}</p>
                    <p className="header-coctel-price">{coctel.price}</p>
                </div>
            ))}
        </div>
    </div>

    )

}

export default Coctel;