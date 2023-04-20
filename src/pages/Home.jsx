import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-background">
            <div className="pos-abs homepage flex">
                <div className="hometext">
                    <p className="fs-500 uppercase ff-sans-cond letter-spacing-1">So, you want to travel to</p>
                    <p className="fs-900 uppercase ff-serif">Space</p>
                    <p className="text-accent">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <Link to="/" className="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</Link>
            </div>
        </div>
    )
};