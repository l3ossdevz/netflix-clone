import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/homescreen/HomeScreen";
import LoginScreen from "./pages/loginscreen/LoginScreen";
import { auth } from "./firebase";

function App() {
    const user = null;
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                console.log(userAuth);
            } else {
            }
        });
        return unsubscribe;
    }, []);
    return (
        <div className="app">
            <Routes>
                {!user ? (
                    <Route path="/" element={<LoginScreen />} />
                ) : (
                    <Route path="/" element={<HomeScreen />} />
                )}
            </Routes>
        </div>
    );
}

export default App;
