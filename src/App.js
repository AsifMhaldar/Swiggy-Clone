import React from 'react';
import ReactDOM from 'react-dom/client';
import Restaurant from './Component/Restaurant';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from './Component/RestaurantMenu';
import SearchFood from './Component/SearchFood';
import SecondaryHome from './Component/SecondaryHome';
import { store } from './Stored/stores';
import { Provider } from 'react-redux';
import Checkout from './Component/Checkout';
import Corporate from './Component/Corporate';
import Instamart1 from './Component/Instamart1';


function App(){
    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            {/* First route */}
            <Route path='/' element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
                <Route path='/restaurant' element={<Restaurant></Restaurant>}></Route>
                <Route path='/city/mumbai/:id' element={<RestaurantMenu></RestaurantMenu>}></Route>
                <Route path='/city/mumbai/:id/search' element={<SearchFood></SearchFood>}></Route>
            </Route>

            {/* Second route */}
            <Route path='Instamart' element={<Instamart1></Instamart1>}></Route>

            <Route path='/Checkout' element={<Checkout></Checkout>}></Route>
            <Route path='/Corporate' element={<Corporate></Corporate>}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)