import React from "react";
import logo from "../../img/logo/template.svg"
import "./MenuPage.css";


const MenuPage = () => {

    return (

        <div className="menu-page">
            <div className="continer">
            <div className="menu-content">
                <div className="menu-logo">
                    <img src={logo} alt="menu logo" className="logo-m"/>
                </div>
                <div className="menu-button">
                    <a href="/drink">Напої</a>
                    <a href="/dishes">Закуски</a>
                    <a href="/board">Своя дошка</a>
                    <a href="/">Назад</a>
                </div>
            </div>
            </div>
        </div>

    )
}

export default MenuPage;