import React from "react";
import TeamMember from "../models/TeamMember.js";
import dougPicture from "../images/1516275782592.jpeg";
import lindaPicture from "../images/LindaTempleton.jpeg";
import simonPicture from "../images/Simon.png";
import peterPicture from "../images/Screenshot 2023-10-31 at 12.47.17 PM.png";
import johnPicture from "../images/Screenshot 2023-10-31 at 12.58.55 PM.png"

const Founders = (props) => {
    const dougLawrence = new TeamMember(
        "Doug Lawrence",
        "CEO",
        dougPicture,
        "Former VP/GM Becton Dickinson Engineer, Penn and MBA, Kellogg",
        "https://www.linkedin.com/in/douglaswlawrence/"
    );

    const lindaTempleman = new TeamMember(
        "Linda Templeman",
        "CSO",
        lindaPicture,
        "Founding CEO, Ph.D Chemical Engineering, Cornell Program Lead at Giner Labs, now GLS"
    );

    const simonStone = new TeamMember(
        "Simon G. Stone",
        "CTO",
        simonPicture,
        "Founding CTO, Program manager and engineering electrochemist at Giner Labs and now GLS MS Chemistry, Arizona State University"
    );

    const peterHemingway = new TeamMember(
        "Peter Hemingway",
        "CFO",
        peterPicture,
        "MBA, Finance, VP Strategy and Business Development BVI Medical, Waltham Plant Controller Becton Dickinson"
    );

    const johnKheir = new TeamMember(
        "Dr. John Kheir",
        "Cardiologist, Boston Children's",
        johnPicture,
        "Associate Professor at Harvard Medical School and Staff Physician in the Cardiac Intensive Care Unit at Boston Children’s Hospital."
    )

    return (
        <div>
            <div style={{ margin: "0rem 4rem 0rem 4rem" }}>
                <h1>Our Founders</h1>
                <div className="team-grid">
                {/* <div className="grid-x"> */}
                    {dougLawrence.display()}
                    {lindaTempleman.display()}
                    {simonStone.display()}
                    {peterHemingway.display()}
                </div>
            </div>
            <div style={{backgroundColor: "white", paddingTop: "1rem"}}>
                <div style={{ margin: "0rem 4rem 0rem 4rem"}}>
                    <h1>Our Advisors</h1>
                    <div className="team-grid">
                        {johnKheir.display()}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Founders;
