import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Coin from "../pages/Coin" 

const RouterPages = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/favorites" element={<Favorites />}/>
                <Route path="/coin/:id" element={<Coin />}/>
            </Routes>
        </Router>
    )
}

export default RouterPages;