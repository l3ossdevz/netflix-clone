import React from "react";
import "./PlansScreen.css";

const PlansScreen = () => {
    return (
        <div className="plansScreen">
            <div className="plansScreen__plan">
                <div className="plansScreen__info">
                    <h4>Basic</h4>
                    <h5>Video quality : Good</h5>
                    <h6>Resolution : 480p</h6>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="plansScreen__plan">
                <div className="plansScreen__info">
                    <h4>Standard</h4>
                    <h5>Video quality : Better</h5>
                    <h6>Resolution : 1080p</h6>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="plansScreen__plan">
                <div className="plansScreen__info">
                    <h4>Premium</h4>
                    <h5>Video quality : Best</h5>
                    <h6>Resolution : 4K + HDR</h6>
                </div>
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default PlansScreen;
