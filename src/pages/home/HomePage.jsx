import React, { useContext } from "react";
import { AuthContext } from "../../auth/auth";

const HomePage = () => {
    const {authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>
                {String(authenticated)}
            </p>
            <button onClick={handleLogout}>Logout</button>
        </div>

    );
}

export default HomePage;