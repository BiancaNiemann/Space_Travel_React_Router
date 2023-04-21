import React from "react";
import portImage from "../../images/technology/image-spaceport-portrait.jpg"

export default function Spaceport() {
    return (
        <div className="flex">
            <div className="techDetails">
                <p className="uppercase text-white letter-spacing-2">The terminology...</p>
                <p className="fs-700 uppercase ff-serif">Spaceport</p>
                <p className="text-accent">
                    A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
                </p>
            </div>
            <img className="techImage" src={portImage} />
        </div>
    )
}
