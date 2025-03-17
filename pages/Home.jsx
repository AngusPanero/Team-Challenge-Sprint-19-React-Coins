import React from "react"
import { useState, useEffect } from "react";
import { addFavorite } from "../functions/Function.jsx";
import { Link } from 'react-router-dom';
import "../styles/Home.css"

const CoinsComponent = () => {
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)

        useEffect( () => {
            const getCoins = async () => {
            try {
                const response = await fetch(`https://api.coincap.io/v2/assets/`)
                if(!response.ok){
                    throw new Error("Error en la Petición")
                }
                const data = await response.json()
                console.log("DATA", data);

                setData(data.data) // Guardo el Array que Esta Dentro del Objeto
                setLoading(true)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        getCoins()
    }, [])  

    if (loading) return <p>Cargando Cryptos...</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <>
        <h1>Top 100 Cryptos In The World</h1>   
        <div className="coin-card-content">
        
            {data.map((coin) => (
                <div className="coin-card">
                    <Link to={`/coin/${coin.id}`}><p>Top: {coin.rank} {coin.symbol} {coin.name}</p></Link>
                    <p>Market Cap: ${parseFloat(coin.marketCapUsd).toFixed(2)}</p>
                    <p>Volume Usd 24Hr: ${parseFloat(coin.volumeUsd24Hr).toFixed(2)}</p>
                    <p>Price: $ {parseFloat(coin.priceUsd).toFixed(2)}</p>
                    <button onClick={() => addFavorite(coin)}>⭐ Favorito ⭐</button>
                </div>
            ))}
        </div>
        </>
    )  
}

export default CoinsComponent