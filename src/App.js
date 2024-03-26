import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Menu from './pages/menu/Menu';
import MenuPage from './pages/menu-page/MenuPage';
import Drink from './pages/drink/Drink';
import Dishes from './pages/dishes/Dishes';
import Promotion from './pages/promotion/Promotion';
import Madeboard from './pages/madeBoard/Madeboard';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<Menu/>} />
       <Route path="/menu" element={<MenuPage/>} />
       <Route path="/promotion" element={<Promotion/>}/>
       <Route path="/drink" element={<Drink/>} />
       <Route path="/dishes" element={<Dishes/>} />
       <Route path="/board" element={<Madeboard/>} />
       </Routes>
    </div>
  );
}

export default App;
