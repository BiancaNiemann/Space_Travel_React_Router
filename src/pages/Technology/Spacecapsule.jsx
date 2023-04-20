import React from "react";
import capsuleImage from "../../images/technology/image-space-capsule-portrait.jpg"

export default function Spacecapsule(){
    return(
        <div>
            <img src={capsuleImage} />
            <p className="uppercase text-white letter-spacing-2">The terminology...</p>
            <p className="fs-700 uppercase ff-serif">Space capsule</p>
            <p className="text-accent">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
        </div>
    )
}
