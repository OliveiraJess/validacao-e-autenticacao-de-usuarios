import React, { useContext } from "react";
import { AuthContext } from "../../auth/auth";
import "../home/homePage.css"

const HomePage = () => {
    const {authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="container">
            <h1 className="title">Home Page</h1>
            {/* <p>
                {String(authenticated)}
            </p> */}
            <button className="buttonLogout" onClick={handleLogout}>Logout</button>
        </div>

    );
}

export default HomePage;