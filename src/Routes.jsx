import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RouterPages = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/coin/:id" element={<Coin />}/>
                <Route path="/favorites" element={<Favorites />}/>
            </Routes>
        </Router>
    )
}

export default RouterPages;