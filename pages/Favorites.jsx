import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../functions/Function";
import "../styles/Favorites.css"

const getFavorites = () => {
    const data = JSON.parse(localStorage.getItem("favorite")) || []
    if(data.length === 0){
        return []
    }
    console.log("Data Local Storage", data);
    return data
}

const Favorites = () => {
    const [ favorites, setFavorites ] = useState([])

    useEffect(() => {
        setFavorites(getFavorites())
    }, []);

    return(
        <>
        <Link to="/">Home</Link>
        <h1>Your Favorites Cryptos Currency</h1>
        <div className="coin-card-fav-individual">
            
            {favorites.map((fav, index) => (
            <div className="coin-card-fav" key={index}>
                <p>Top: {fav.rank} {fav.symbol} {fav.name}</p>
                <p>Market Cap: ${parseFloat(fav.marketCapUsd).toFixed(2)}</p>
                <p>Volume Usd 24Hr: ${parseFloat(fav.volumeUsd24Hr).toFixed(2)}</p>
                <p>Price: $ {parseFloat(fav.priceUsd).toFixed(2)}</p>
                <button onClick={() => removeFavorite(fav.id, setFavorites)}>🗑 Eliminar 🗑</button>
            </div>
            ))}
        </div>
        </>
    )
}

export default Favorites