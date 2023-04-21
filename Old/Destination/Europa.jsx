import React from "react";
import europaImage from "../../images/destinations/image-europa.png"

export default function Europa() {
    return (
        <div className="flex">
            <img className="planetImg" src={europaImage} />
            <div className="destinationtext">
                <p className="fs-800 uppercase ff-serif">Europa</p>
                <p className="text-accent"> The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                <div className="flex specs" >
                    <div className="distance">
                        <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. Distance</p>
                        <p className="fs-500 ff-serif uppercase">628 mil. km</p>
                    </div>
                    <div className="time">
                        <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Est. time travel</p>
                        <p className="fs-500 ff-serif uppercase">3 years</p>
                    </div>
                </div>
            </div>

        </div>
    )
}