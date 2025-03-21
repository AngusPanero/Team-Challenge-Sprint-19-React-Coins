import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addFavorite, removeFavorite } from "../functions/Function";
import "../styles/Coin.css"

const Coin = () => {
    const { id } = useParams()

    const [ coindata, setCoinData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const getCoin = async () => {
            try {
                const response = await fetch(`https://api.coincap.io/v2/assets/${id}`)
                const data = await response.json()
                setCoinData(data.data)
                setLoading(true)
            } catch (error) {
                setError(error.message)
            } finally{
                setLoading(false)
            }
        }
        getCoin()
    }, [id])

    if(loading){
        return <p>Cargando Cryptos...</p>
    }

    if(error){
        return <p>Error: {error}</p>
    }
    return(
        <>
        <div className="coin-card-individual-content">
        <h1>Special Information About {id.toUpperCase()}</h1>
        
            {
                <div className="coin-card-individual">
                    <p>Top: {coindata.rank} {coindata.symbol} {coindata.name}</p>
                    <p>Market Cap: ${parseFloat(coindata.marketCapUsd).toFixed(2)}</p>
                    <p>Volume Usd 24Hr: ${parseFloat(coindata.volumeUsd24Hr).toFixed(2)}</p>
                    <p>Supply: {parseFloat(coindata.supply).toFixed(2)}</p>
                    <p>Max Supply: {parseFloat(coindata.maxSupply).toFixed(2)}</p>
                    <p>Change Percent 24Hr: ${parseFloat(coindata.changePercent24Hr).toFixed(2)}</p>
                    <p>VWAP 24Hr: ${parseFloat(coindata.vwap24Hr).toFixed(2)}</p>
                    <a href={coindata.explorer} target="_blank"><p>View URL Explorer</p></a>
                    <p>Price: $ {parseFloat(coindata.priceUsd).toFixed(2)}</p>
                    <button onClick={() => addFavorite(coindata)}>⭐ Favorito ⭐</button>
                </div>
            }
        </div>
        </>
    )
}

export default Coin;