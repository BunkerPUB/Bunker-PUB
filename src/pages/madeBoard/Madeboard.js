import React, { useState } from "react";
import "./Madeboard.css";
import DataMenu from "../../DataMenu/DataMenu";
import addicon from "../../img/icon/add.svg";
import deleteicon from "../../img/icon/delete.svg";
import arrow from "../../img/icon/arrowback.svg"

const Madeboard = () => {
  const falseDataBeerBoard = DataMenu.falseDataBeerBoard;
  const [yourBoardItems, setYourBoardItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateLocalStorage = () => {
    localStorage.setItem('selectedItems', JSON.stringify(yourBoardItems));
    localStorage.setItem('totalPrice', totalPrice);
  };

  const handleAddToYourBoard = (item) => {
    const existingItemIndex = yourBoardItems.findIndex((boardItem) => boardItem.name === item.name);

    if (existingItemIndex !== -1) {
      const updatedItems = [...yourBoardItems];
      updatedItems[existingItemIndex].quantity += 1;
      updatedItems[existingItemIndex].totalPrice += parseInt(item.price);
      setYourBoardItems(updatedItems);
    } else {
      const newItem = { ...item, quantity: 1, totalPrice: parseInt(item.price) };
      setYourBoardItems([...yourBoardItems, newItem]);
    }

    setTotalPrice(totalPrice + parseInt(item.price));

    // Зберегти дані в локальному сховищі після змін
    updateLocalStorage();
  };

  const handleRemoveFromYourBoard = (index, price, quantity) => {
    const updatedItems = [...yourBoardItems];
 
    if (quantity === 1) {
      updatedItems.splice(index, 1);
    } else {
      updatedItems[index].quantity -= 1;
      updatedItems[index].totalPrice -= price;
    }
 
    setYourBoardItems(updatedItems);
    setTotalPrice(totalPrice - price);
 
    // Оновити дані в локальному сховищі
    updateLocalStorage();
  };

  const handleResetBoard = () => {
    localStorage.removeItem('selectedItems');
    localStorage.removeItem('totalPrice');
    setYourBoardItems([]);
    setTotalPrice(0);
  };

  return (
    <div className="made-board">
      <div className="continer">
        <div className="bording">
          <a className="arrow" href="/menu"><img src={arrow} alt="arrow"/>Повернутись назад</a>
          <h2>Створи свою дошку</h2>
          <div className="header-board">
            <p className="header-board-name">Назва</p>
            <p className="header-board-quantity">Кількість</p>
            <p className="header-board-price">Ціна</p>
            <p className="header-board-add"></p>
          </div>
          <div className="your-board">
            {yourBoardItems.map((item, index) => (
              <div key={index} className="board-item">
                <p className="header-board-name">{item.name}</p>
                <p className="header-board-quantity">{item.quantity}</p>
                <p className="header-board-price">{item.totalPrice} грн.</p>
                <p className="header-board-add"><img
                  src={deleteicon}
                  onClick={() => handleRemoveFromYourBoard(index, item.price, item.quantity)}
                  alt="Delete"
                /></p>
              </div>
            ))}
            <div className="board-price">
              <a onClick={handleResetBoard} className="board-button">Почни спочатку</a>
              <p className="total-price">Ціна за дошку: {yourBoardItems.length > 0 ? totalPrice : 0} грн.</p>
            </div>
          </div>
          <div className="header-board">
            <p className="header-board-name">Назва</p>
            <p className="header-board-volume">Вага</p>
            <p className="header-board-price">Ціна</p>
            <p className="header-board-add"></p>
          </div>
          <div className="this-beer-board">
            {falseDataBeerBoard.map((board, index) => (
              <div key={index} className="board-item">
                <p className="header-board-name">{board.name}</p>
                <p className="header-board-volume">{board.volume} г.</p>
                <p className="header-board-price">{board.price} грн.</p>
                <p className="header-board-add"><img
                  src={addicon}
                  onClick={() => handleAddToYourBoard(board)}
                  alt="Add"
                /></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Madeboard;
