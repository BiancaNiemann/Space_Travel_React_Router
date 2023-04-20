import React from "react";
import marsImage from "../../images/destinations/image-mars.png"

export default function Mars() {
    return (
        <div>
            <img src={marsImage} />
            <p className="fs-900 uppercase ff-serif">Mars</p>
            <p className="text-accent"> Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,  the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
            <div className="flex" >
                <div>
                    <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. Distance</p>
                    <p className="fs-500 ff-serif uppercase">225 mil. km</p>
                </div>
                <div>
                    <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Est. time travel</p>
                    <p className="fs-500 ff-serif uppercase">9 months</p>
                </div>
            </div>
        </div>
    )
}