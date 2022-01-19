import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./ProfileScreen.css";

const ProfileScreen = () => {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Navbar />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                        src="https://www.pngarts.com/files/3/Cool-Avatar-Transparent-Image.png"
                        alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <p></p>
                            <button
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;
