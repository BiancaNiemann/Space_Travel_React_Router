import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/shared/logo.svg"

export default function Header(){
    return (
        <header>
            <nav class="flex">
                <img src={logo} />
                <ul class="primary-navigation underline-indicators flex ">
                    <Link to="/" class="active underline uppercase text-white letter-spacing-2"><span>00</span>Home</Link>
                    <Link to="destination" class="underline uppercase text-white letter-spacing-2"><span>01</span>Destination</Link>
                    <Link to="crew" class="underline uppercase text-white letter-spacing-2"><span>02</span>Crew</Link>
                    <Link to="technology" class="underline uppercase text-white letter-spacing-2"><span>03</span>Technology</Link>
                    </ul>
            </nav>
        </header>
    )
}