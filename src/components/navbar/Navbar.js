import React, { useEffect, useState } from "react";
import "../navbar/Navbar.css";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <div className="navbar__contents">
                <img
                    className="navbar__logo"
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    alt=""
                />

                <img
                    className="navbar__avatar"
                    src="https://www.pngarts.com/files/3/Cool-Avatar-Transparent-Image.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Navbar;
