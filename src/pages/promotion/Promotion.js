import React from "react";
import "./Promotion.css";
import logo from "../../img/logo/template.svg"
import DataMenu from "../../DataMenu/DataMenu";
import arrow from "../../img/icon/arrowback.svg"

const Promotion = () =>{

const falseDataPromotion = DataMenu.falseDataPromotion;

    return (

        <div className="promotion-page">
            <div className="continer">
            <div className="promotion-content">
            <a className="arrow" href="/menu"><img src={arrow} alt="arrow"/>Повернутись назад</a>
                <div className="menu-logo-promotion">
                    <img src={logo} alt="menu logo" className="logo-p"/>
                </div>
                <div className="menu-promotion">
                    <h2>
                        Акційні пропозиції
                    </h2>
                {falseDataPromotion.map((promotion, index) => (
                    <div key={index} className="promotion-item">
                        <p className="header-promotion-data"> Акція діє до: <span className="promotion-span">{promotion.data}</span></p>
                        <p className="header-promotion-promotion">{promotion.promotion}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>

    )
}

export default Promotion;