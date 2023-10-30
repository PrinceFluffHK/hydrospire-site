import React from "react";
import TeamMember from "../models/TeamMember.js";
import dougPicture from "../images/1516275782592.jpeg"

const Team = (props) => {
    const dougLawrence = new TeamMember("Douglas Lawrence", "CEO", dougPicture, "https://www.linkedin.com/in/douglaswlawrence/")

    return (
        <div>
            Hello from Team
            <div className="grid-x grid-margin-x">
                {dougLawrence.display()}
            </div>
        </div>
    )
}

export default Team