import React from "react";
import europaImage from "../../images/destinations/image-europa.png"

export default function Europa() {
    return (
        <div>
            <img src={europaImage} />
            <p className="fs-900 uppercase ff-serif">Europa</p>
            <p className="text-accent"> The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            <div className="flex" >
                <div>
                    <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. Distance</p>
                    <p className="fs-500 ff-serif uppercase">628 mil. km</p>
                </div>
                <div>
                    <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Est. time travel</p>
                    <p className="fs-500 ff-serif uppercase">3 years</p>
                </div>
            </div>
        </div>
    )
}