import React from "react"
import { Link, Outlet } from "react-router-dom"
import data from "../data.json"
import { useParams } from "react-router-dom"
import launchImage from "../images/technology/image-launch-vehicle-portrait.jpg"

export default function Technologies() {
    const { id } = useParams()

    const getNav = data.technology.map(item => (
        <Link key={(item.id).toString()} to={(item.id).toString()}>{item.id}</Link>
    ))

    const renderTechnologyHtml = data.technology.map(item => {
        if (item.id === Number(id)) {
            return (
                <div className="flex">
                    <div className="techDetails">
                        <p className="uppercase text-white letter-spacing-2">The terminology...</p>
                        <p className="fs-700 uppercase ff-serif">{item.name}</p>
                        <p className="text-accent">{item.description}</p>
                    </div>
                    <img className="techImage" src={launchImage} />
                </div>
            )
        }
    })

    return (
        <div className="technologies-background">
            <div className="pos-abs">
                <h2 className="numbered-title"><span>03</span>Space Launch 101</h2>
                <div className="flex techNav">
                    <nav className="flex">
                        <ul className="number-indicators flex ">
                            {getNav}
                        </ul>
                    </nav>
                    {renderTechnologyHtml}
                </div>
            </div>
        </div>
    )
}