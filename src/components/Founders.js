import React from "react";
import TeamMember from "../models/TeamMember.js";
import dougPicture from "../images/1516275782592.jpeg"

const Founders = (props) => {
    const dougLawrence = new TeamMember("Doug Lawrence", "CEO", dougPicture, "https://www.linkedin.com/in/douglaswlawrence/")

    return (
        <div style={{margin: "0rem 4rem 0rem 4rem"}}>
            <h1>
                The Hydrospire Team
            </h1>
            <div className="team-grid">
                {dougLawrence.display()}
                {dougLawrence.display()}
                {dougLawrence.display()}
            </div>
        </div>
    )
}

export default Founders