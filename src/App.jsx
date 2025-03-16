import React from "react"
import CoinsComponent from "../pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
    return(
        <>
            <nav>
                <div>Logo</div>

                {/* <ul>
                    <li>Bitcoin</li>
                    <li>Ethereum</li>
                    <li>USDT</li>
                </ul> */}

                <p>Calendario NYSE</p>
            </nav>

            <footer>
                <p>Favoritos</p>
            </footer>
            <CoinsComponent />
        </>    
    )
}

export default App