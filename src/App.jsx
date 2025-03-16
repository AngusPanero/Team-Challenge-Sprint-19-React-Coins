import React from "react"
import RouterPages from "./Routes"
import "../styles/App.css"

const App = () => {
    return(
        <>
            <nav>
                <div>Logo</div>
                <p>Calendario NYSE</p>
            </nav>

            <RouterPages />
        </>
    );
}

export default App