import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Technologies() {
    return (
        <div>
            <h2 class="numbered-title"><span>03 </span>Space Launch 101</h2>
            <nav class="flex">
                <ul class="number-indicators flex ">
                    <Link to="launch">1</Link>
                    <Link to="spaceport">2</Link>
                    <Link to="spacecapsule">3</Link>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}