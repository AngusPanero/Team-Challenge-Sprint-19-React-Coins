import React from "react"
import RouterPages from "./Routes"
import "../styles/App.css"

const App = () => {
    return(
        <>
            <nav>
                <div className="logo-container">
                    <a href="/"><img className="logo" src="../img/image0.png" alt="logo" /></a>
                    <a href="/"><p className="logo-name">Coin-World</p></a>
                </div>
                <a href="/"><p>Home</p></a>
                <a href="/favorites"><p>⭐ Your Favorites ⭐</p></a>
            <a href="https://es.tradingview.com/markets/stocks-usa/earnings/" target="_blank"><p>NYSE - Stocks Calendar</p></a>
            </nav>

            <RouterPages />
        </>
    );
}

export default App