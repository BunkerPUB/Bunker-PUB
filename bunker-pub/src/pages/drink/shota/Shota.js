import React from "react";
import'./Shota.css';
import DataMenu from "../../../DataMenu/DataMenu.js";

const Shota = () => {

    const falseDataShota = DataMenu.falseDataShota;
    


return(
    <div className="shota">
        <h2>Сети</h2>
        <div className="header-shota">
            <p className="header-shota-name">Назва</p>
            <p className="header-shota-about">Опис</p>
            <p className="header-shota-volume">Об'єм</p>
            <p className="header-shota-price">Ціна</p>
        </div>
        <div className="this-shota">
            {falseDataShota.map((shota, index) => (
                <div key={index} className="shota-item">
                    <p className="header-shota-name">{shota.name}</p>
                    <p className="header-shota-about">{shota.about}</p>
                    <p className="header-shota-volume">{shota.volume}</p>
                    <p className="header-shota-price">{shota.price}</p>
                </div>
            ))}
        </div>
    </div>
);
}

export default Shota;
