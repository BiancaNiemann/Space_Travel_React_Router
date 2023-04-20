import React from "react";
import moonImage from "../../images/destinations/image-moon.png"

export default function Moon() {
    return (
        <div className="flex"> 
            <img className="planetImg" src={moonImage} />
            <div className="destinationtext">
            <p className="fs-800 uppercase ff-serif">Moon</p>
            <p className="text-accent">  See our planet as you’ve never seen it before. A perfect relaxing trip away to help   regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <div className="flex specs" >
                <div className="distance">
                    <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. Distance</p>
                    <p className="fs-500 ff-serif uppercase">384,400 km</p>
                </div>
                <div>
                    <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Est. time travel</p>
                    <p className="fs-500 ff-serif uppercase">3 days</p>
                </div>
            </div>
            </div>

        </div>
    )
}