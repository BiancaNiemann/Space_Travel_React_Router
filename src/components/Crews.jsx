import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Crews() {
    return (
        <div className="crews-background">
            <h2 className="numbered-title"><span>02 </span>Meet your Crew</h2>
            <Outlet />
            <nav className=" flex">
                <ul className="primary-navigation dot-indicators flex ">
                    <Link to="."><span className="sr-only">Doug</span></Link>
                    <Link to="mark"><span className="sr-only">Mark</span></Link>
                    <Link to="victor"><span className="sr-only">Victor</span></Link>
                    <Link to="anoush"><span className="sr-only">Anousheh</span></Link>
                </ul>
            </nav>
            
        </div>
    )
}