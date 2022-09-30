import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import { AuthProvider } from "./auth/auth";

const AppRoutes = () => {

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;