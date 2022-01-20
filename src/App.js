/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeScreen from "./pages/homescreen/HomeScreen";
import LoginScreen from "./pages/loginscreen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import ProfileScreen from "./pages/profilescreen/ProfileScreen";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                console.log(userAuth);
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
                navigate("/profile");
            } else {
                dispatch(logout());
                navigate("/");
            }
        });
        return unsubscribe;
    }, [dispatch]);
    return (
        <div className="app">
            <Routes>
                {!user ? (
                    <Route path="/" element={<LoginScreen />} />
                ) : (
                    <>
                        <Route path="/profile" element={<ProfileScreen />} />
                        <Route path="/home" element={<HomeScreen />} />
                    </>
                )}
            </Routes>
        </div>
    );
}

export default App;
