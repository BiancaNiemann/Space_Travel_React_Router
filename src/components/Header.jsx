import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/shared/logo.svg"
import hamburger from "../images/shared/icon-hamburger.svg"
import closeIcon from "../images/shared/icon-close.svg"

export default function Header() {
    const [click, setClick] = useState(false)

    function handleClick() {
        setClick(true)
    }

    function closeMobileMenu() {
        setClick(false)
    }

    return (
        <header className="flex header">
            <img className="logo" src={logo} />
            
            {!click && <img
                className="icon hamburger"
                src={hamburger}
                onClick={handleClick}
            />}
            {click && <div className="navModal">
            <img
                className="icon close"
                src={closeIcon}
                onClick={closeMobileMenu}
            />
            <nav className="">
                <ul className="primary-navigation underline-indicators flex hamburgerNav">
                    <NavLink
                        to="/"
                        className=" underline uppercase text-white letter-spacing-2"
                        onClick={closeMobileMenu}
                    >
                        <span className="number">00</span>
                        Home
                    </NavLink>
                    <NavLink
                        to="destination/moon"
                        className="underline uppercase text-white letter-spacing-2"
                        onClick={closeMobileMenu}
                    >
                        <span className="number">01</span>
                        Destination
                    </NavLink>
                    <NavLink
                        to="crew/doug"
                        className="underline uppercase text-white letter-spacing-2"
                        onClick={closeMobileMenu}
                    >
                        <span className="number">02</span>
                        Crew
                    </NavLink>
                    <NavLink
                        to="technology/1"
                        className="underline uppercase text-white letter-spacing-2"
                        onClick={closeMobileMenu}
                    >
                        <span className="number">03</span>
                        Technology
                    </NavLink>
                </ul>
            </nav>
            </div>}
            
            <nav className="flex nav-bar">
                <ul className="primary-navigation underline-indicators flex ">
                    <NavLink
                        to="/"
                        className=" underline uppercase text-white letter-spacing-2"
                    >
                        <span className="number">00</span>
                        Home
                    </NavLink>
                    <NavLink
                        to="destination/moon"
                        className="underline uppercase text-white letter-spacing-2"
                    >
                        <span className="number">01</span>
                        Destination
                    </NavLink>
                    <NavLink
                        to="crew/doug"
                        className="underline uppercase text-white letter-spacing-2"
                    >
                        <span className="number">02</span>
                        Crew
                    </NavLink>
                    <NavLink
                        to="technology/1"
                        className="underline uppercase text-white letter-spacing-2"
                    >
                        <span className="number">03</span>
                        Technology
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}