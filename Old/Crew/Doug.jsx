import React from "react";
import dougImage from "../../images/crews/image-douglas-hurley.png"

export default function Doug() {
    return (
        <div className="flex">
            <div className="crewText">
                <p className="fs-600 uppercase ff-serif role">Commander</p>
                <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
                <p className="text-accent crewDetails">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
            <img className="crewImg" src={dougImage} />
        </div>
    )
}