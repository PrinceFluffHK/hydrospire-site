import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Hydrospire_logo_large-removebg-preview.png"

const TopBar = (props) => {
    return (
        <div className="top-bar">
                <Link style={{height: "100%"}} to="/" >
                    <img style={{objectFit: "cover", height: "100%", marginLeft: "1rem"}} src={logo}/>
                </Link>
            <div className="top-bar-right">
                <Link  to="/" >
                    <h2 className="top-bar-tab" style={{fontWeight: "bold"}}>Home</h2>
                </Link>
                <Link className="" to="/founders">
                    <h2 className="top-bar-tab">Founders</h2>
                </Link>
                <Link className="" to="/advisors">
                    <h2 className="top-bar-tab">Advisors</h2>
                </Link>
                <Link className="" to="/our-mission">
                    <h2 className="top-bar-tab">Our Mission</h2>
                </Link>

            </div>
            {/* <Link className="" to="/why-hydrospire">
                <h2 className="top-bar-tab">Why Hydrospire?</h2>
            </Link> */}
        </div>
    );
};

export default TopBar;
