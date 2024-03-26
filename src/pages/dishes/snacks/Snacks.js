import React from "react";
import "./Snacks.css";
import DataMenu from "../../../DataMenu/DataMenu.js";



const Snacks = () => {

const falseDataSnacks = DataMenu.falseDataSnacks;

return (

    <div className="snacks">
        <h2>Снеки</h2>
        <div className="header-snacks">
            <p className="header-snacks-name">Назва</p>
            <p className="header-snacks-about">Опис</p>
            <p className="header-snacks-volume">Вага/г.</p>
            <p className="header-snacks-price">Ціна</p>
        </div>
        <div className="this-snacks">
            {falseDataSnacks.map((snacks, index) => (
                <div key={index} className="snacks-item">
                    <p className="header-snacks-name">{snacks.name}</p>
                    <p className="header-snacks-about">{snacks.about}</p>
                    <p className="header-snacks-volume">{snacks.volume}</p>
                    <p className="header-snacks-price">{snacks.price}</p>
                </div>
            ))}
        </div>
    </div>

)


}
export default Snacks;