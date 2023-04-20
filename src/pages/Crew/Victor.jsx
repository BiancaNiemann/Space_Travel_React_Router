import React from "react";
import victorImage from "../../images/crews/image-victor-glover.png"

export default function Victor(){
    return (
        <div>
             <p className="fs-600 uppercase ff-serif">Pilot</p>
             <p className="fs-700 uppercase ff-serif">Victor Glover</p>
             <p className="text-accent">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a   station systems flight engineer.</p>
            <img src={victorImage}/>
        </div>
    )
}