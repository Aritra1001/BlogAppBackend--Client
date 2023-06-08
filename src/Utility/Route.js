import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../NavPages/Home/Home';
import Bollywood from '../NavPages/Bollywood/Bollywood';
import Technology from '../NavPages/Technology/Technology';
import Hollywood from '../NavPages/Hollywood/Hollywood';
import Sport from '../NavPages/Sport/Sport';
import Food from '../NavPages/Food/Food';
// import FoodDetail from '../NavPages/Food/FoodDetail';
import ItemDetails from './ItemDetail';

function RouterCompo(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/bollywood' element={<Bollywood/>}/>
                    <Route path='/technology' element={<Technology/>}/>
                    <Route path='/hollywood' element={<Hollywood/>}/>
                    <Route path='/sport' element={<Sport/>}/>
                    <Route path='/food' element={<Food/>}/>
                    <Route path='itemDetail/:id' element={<ItemDetails/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterCompo;