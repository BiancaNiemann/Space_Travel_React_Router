import React from "react"
import { NavLink } from "react-router-dom"
import data from "../data.json"
import { useParams } from "react-router-dom"

export default function Crews() {
    const { id } = useParams()

    const getNav = data.crew.map(item => (
        <NavLink key={item.nickname} to={(item.nickname).toLowerCase()}><span className="sr-only">{item.name}</span></NavLink>
    ))

    const renderCrewHtml = data.crew.map(item => {
        if ((item.nickname).toLowerCase() === id) {
            return (
                <div key={item.nickname}>
                    <div className="crewText">
                        <p className="fs-600 uppercase ff-serif role">{item.role}</p>
                        <p className="fs-700 uppercase ff-serif">{item.name}</p>
                        <p className="text-accent crewDetails">{item.bio}</p>
                    </div>
                </div>
            )
        }
    })

    const renderCrewImageHtml = data.crew.map(item => {
        if ((item.nickname).toLowerCase() === id) {
            return (
                <div className="crewImgContainer" key={item.nickname} >
                    <img className="crewImg" src={item.images} />
                </div>
            )
        }
    })

    return (
        <div className="crews-background">
            <div className="pos-abs">
                <h2 className="numbered-title"><span>02 </span>Meet your Crew</h2>
                <div className="mobileRender">
                    <div className="flex">
                        {renderCrewHtml}
                        <div className="portrait">
                            {renderCrewImageHtml}
                        </div>
                    </div>
                    <nav className="dot-position">
                        <ul className="dot-indicators flex">
                            {getNav}
                        </ul>
                    </nav>
                    <div className="landscape">
                        {renderCrewImageHtml}
                    </div>
                </div>
            </div>
        </div>
    )
}