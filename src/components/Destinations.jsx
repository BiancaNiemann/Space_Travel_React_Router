import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Destinations() {
    return (
        <div>
            <h2 class="numbered-title"><span>01 </span>Pick your destination</h2>
            <nav class="flex">
                <ul class="primary-navigation underline-indicators flex ">
                    <Link to="moon" class="active underline uppercase text-white letter-spacing-2">Moon</Link>
                    <Link to="mars" class="underline uppercase text-white letter-spacing-2">Mars</Link>
                    <Link to="europa" class="underline uppercase text-white letter-spacing-2">Europa</Link>
                    <Link to="titan" class="underline uppercase text-white letter-spacing-2">Titan</Link>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}