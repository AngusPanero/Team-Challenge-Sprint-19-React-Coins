import React from "react"
import { useState, useEffect } from "react";
import addFavorite from "../functions/Function.jsx";

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
        <div>
            <h1>Lista de Criptomonedas</h1>
            {data.map((coin) => (
                <div>
                    <p>Rank: {coin.rank}, {coin.symbol}, {coin.name}</p>
                    <p>Price: ${parseFloat(coin.priceUsd).toFixed(2)}</p>
                    <p>Market Cap: ${parseFloat(coin.marketCapUsd).toFixed(2)}</p>
                    <p>Volume Usd 24Hr: ${parseFloat(coin.volumeUsd24Hr).toFixed(2)}</p>
                    <button onClick={() => addFavorite(coin)}>Favorito</button>
                </div>
            ))}
        </div>
    )  
}

export default CoinsComponent