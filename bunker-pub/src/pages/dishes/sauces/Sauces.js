import React from "react";
import './Sauces.css';
import DataMenu from "../../../DataMenu/DataMenu";

const Sauces = () => {

const falseDataSauces = DataMenu.falseDataSauces;

    return(

        <div className="sauces">
        <h2>Соуси</h2>
        <div className="header-sauces">
            <p className="header-sauces-name">Назва</p>
            <p className="header-sauces-about"></p>
            <p className="header-sauces-volume">Вага</p>
            <p className="header-sauces-price">Ціна</p>
        </div>
        <div className="this-sauces">
            {falseDataSauces.map((sauces, index) => (
                <div key={index} className="sauces-item">
                    <p className="header-sauces-name">{sauces.name}</p>
                    <p className="header-sauces-about">{sauces.about}</p>
                    <p className="header-sauces-volume">{sauces.volume}</p>
                    <p className="header-sauces-price">{sauces.price}</p>
                </div>
            ))}
        </div>
    </div>

    )
}

export default Sauces;