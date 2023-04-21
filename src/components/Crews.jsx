import React from "react"
import { Link, Outlet } from "react-router-dom"
import data from "../data.json"
import { useParams } from "react-router-dom"
import anoushImage from "../images/crews/image-anousheh-ansari.png"

export default function Crews() {
    const { id } = useParams()

    const getNav = data.crew.map(item => (
        <Link key={item.nickname} to={(item.nickname).toLowerCase()}><span className="sr-only">{item.name}</span></Link>
    ))

    const renderDestinationHtml = data.crew.map(item => {
        if ((item.nickname).toLowerCase() === id) {
            return (
                <div className="flex" key={item.nickname}>
                    <div className="crewText">
                        <p className="fs-600 uppercase ff-serif role">{item.role}</p>
                        <p className="fs-700 uppercase ff-serif">{item.name}</p>
                        <p className="text-accent crewDetails">{item.bio}</p>
                    </div>
                    <img className="crewImg" src={anoushImage} />
                </div>
            )
        }
    })

    return (
        <div className="crews-background">
            <div className="pos-abs">
                <h2 className="numbered-title"><span>02 </span>Meet your Crew</h2>
                {renderDestinationHtml}
                <nav className="dot-position">
                    <ul className="dot-indicators flex">
                        {getNav}
                    </ul>
                </nav>
            </div>
        </div>
    )
}