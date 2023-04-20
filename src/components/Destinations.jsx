import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Destinations() {
    return (
        <div className="destinations-background ">
            <div className="pos-abs destinationPage">
                    <h2 className="numbered-title"><span>01</span>Pick your destination</h2>
                    <nav className="flex destinationNav">
                        <ul className="primary-navigation underline-indicators flex ">
                            <Link to="." className="active underline uppercase text-white letter-spacing-2">Moon</Link>
                            <Link to="mars" className="underline uppercase text-white letter-spacing-2">Mars</Link>
                            <Link to="europa" className="underline uppercase text-white letter-spacing-2">Europa</Link>
                            <Link to="titan" className="underline uppercase text-white letter-spacing-2">Titan</Link>
                        </ul>
                    </nav>
                <Outlet />
            </div>

        </div>
    )
}