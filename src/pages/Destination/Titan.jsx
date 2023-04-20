import React from "react";
import titanImage from "../../images/destinations/image-titan.png"

export default function Titan() {
    return (
        <div className="flex">
            <img className="planetImg" src={titanImage} />
            <div className="destinationtext">
            <p className="fs-800 uppercase ff-serif">Titan</p>
            <p className="text-accent">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a   bonus, you get striking views of the Rings of Saturn.</p>
            <div className="flex specs" >
                <div className="distance">
                    <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. Distance</p>
                    <p className="fs-500 ff-serif uppercase">1.6 bil. km</p>
                </div>
                <div>
                    <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Est. time travel</p>
                    <p className="fs-500 ff-serif uppercase">7 years</p>
                </div>
            </div>
            </div>
        </div>
    )
}