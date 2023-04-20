import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Crews() {
    return (
        <div>
            <h2 class="numbered-title"><span>02 </span>Meet your Crew</h2>
            <nav class=" flex">
                <ul class="primary-navigation dot-indicators flex ">
                    <Link to="doug"><span class="sr-only">Doug</span></Link>
                    <Link to="mark"><span class="sr-only">Mark</span></Link>
                    <Link to="victor"><span class="sr-only">Victor</span></Link>
                    <Link to="anoush"><span class="sr-only">Anousheh</span></Link>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}