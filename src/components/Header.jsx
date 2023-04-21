import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/shared/logo.svg"

export default function Header() {
    return (
        <header className="flex header">
            <img className="logo" src={logo} />
            <nav className="flex nav-bar">
                <ul className="primary-navigation underline-indicators flex ">
                    <Link to="/" className="underline uppercase text-white letter-spacing-2"><span>00</span>Home</Link>
                    <Link to="destination" className="underline uppercase text-white letter-spacing-2"><span>01</span>Destination</Link>
                    <Link to="crew" className="underline uppercase text-white letter-spacing-2"><span>02</span>Crew</Link>
                    <Link to="technology" className="underline uppercase text-white letter-spacing-2"><span>03</span>Technology</Link>
                </ul>
            </nav>
        </header>
    )
}