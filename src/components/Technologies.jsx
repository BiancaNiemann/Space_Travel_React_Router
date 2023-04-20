import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Technologies() {
    return (
        <div class="technologies-background">
            <div className="pos-abs">
                <h2 class="numbered-title"><span>03</span>Space Launch 101</h2>
                <div className="flex techNav">
                    <nav class="flex">
                        <ul class="number-indicators flex ">
                            <Link to=".">1</Link>
                            <Link to="spaceport">2</Link>
                            <Link to="spacecapsule">3</Link>
                        </ul>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}