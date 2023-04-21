import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/shared/logo.svg"
import hamburger from "../images/shared/icon-hamburger.svg"

export default function Header() {
    return (
        <header className="flex header">
            <img className="logo" src={logo} />
            <img className="hamburger" src={hamburger}/>
            <nav className="flex nav-bar">
                <ul className="primary-navigation underline-indicators flex ">
                    <Link to="/" className="underline uppercase text-white letter-spacing-2"><span className="number">00</span>Home</Link>
                    <Link to="destination/moon" className="underline uppercase text-white letter-spacing-2"><span className="number">01</span>Destination</Link>
                    <Link to="crew/doug" className="underline uppercase text-white letter-spacing-2"><span className="number">02</span>Crew</Link>
                    <Link to="technology/1" className="underline uppercase text-white letter-spacing-2"><span className="number">03</span>Technology</Link>
                </ul>
            </nav>
        </header>
    )
}