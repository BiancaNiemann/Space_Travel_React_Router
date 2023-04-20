import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-background">
            <p className="fs-500 uppercase ff-serif letter-spacing-1">So, you want to travel to space</p>
            <p className="fs-900 uppercase ff-serif">Space</p>
            <Link to="/" className="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</Link>
            <p className="text-accent">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
    )
};