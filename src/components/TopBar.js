import React from "react";
import { Link } from "react-router-dom";

const TopBar = (props) => {
    return (
        <div className="top-bar">
            <Link  to="/" >
                <h2 className="top-bar-tab" style={{fontWeight: "bold"}}>Home</h2>
            </Link>
            <Link className="" to="/team">
                <h2 className="top-bar-tab">Team</h2>
            </Link>
            <Link className="" to="/ischemia">
                <h2 className="top-bar-tab">Ischemia</h2>
            </Link>
            <Link className="" to="/hydrogen-therapy">
                <h2 className="top-bar-tab">Hydrogen</h2>
            </Link>
            <Link className="" to="/why-hydrospire">
                <h2 className="top-bar-tab">Why Hydrospire?</h2>
            </Link>
        </div>
    );
};

export default TopBar;
