import React from "react"
import { Link, Outlet } from "react-router-dom"
import data from "../data.json"
import { useParams } from "react-router-dom"

export default function Technologies() {
    const { id } = useParams()

    const getNav = data.technology.map(item => (
        <Link key={(item.id).toString()} to={(item.id).toString()}>{item.id}</Link>
    ))

    const renderTechnologyHtml = data.technology.map(item => {
        if (item.id === Number(id)) {
            return (
                <div className="flex" key={item.id}>
                    <div className="techDetails">
                        <p className="uppercase text-white letter-spacing-2">The terminology...</p>
                        <p className="fs-700 uppercase ff-serif">{item.name}</p>
                        <p className="text-accent techDescription">{item.description}</p>
                    </div>
                </div>
            )
        }
    })

    const renderTechnologyImageHtml = data.technology.map(item => {
        if (item.id === Number(id)) {
            return (
                <div key={item.id}>
                    <img className="techImage portrait" src={item.imageNamePortrait} />
                    <img className="techImage landscape" src={item.imageNameLandscape} />
                </div>
            )
        }
    })

    return (
        <div className="technologies-background">
            <div className="pos-abs">
                <h2 className="numbered-title"><span>03</span>Space Launch 101</h2>
                <div className="techImg landscape">
                            {renderTechnologyImageHtml}
                        </div>
                <div className="flex techContainer">
                    <nav className="flex">
                        <ul className="number-indicators flex ">
                            {getNav}
                        </ul>
                    </nav>
                    <div className="flex">
                        {renderTechnologyHtml}
                        <div className="portrait">
                            {renderTechnologyImageHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}