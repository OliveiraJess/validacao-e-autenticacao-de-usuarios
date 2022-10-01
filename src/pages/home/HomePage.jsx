import React, { useContext } from "react";
import { AuthContext } from "../../auth/auth";
import "../home/homePage.css"

const HomePage = () => {
    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
    }

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className="container">
            <div className="header"></div>
            <h1 className="title">Home Page</h1>
            <div className="card" ></div>
            <div className="cardButton">
                <button className="buttonLogout" onClick={handleLogout}>Logout</button>
                <button className="buttonBack" onClick={handleBack}>Back</button>
            </div>
            {/* <p>
                {String(authenticated)}
            </p> */}

        </div>

    );
}

export default HomePage;