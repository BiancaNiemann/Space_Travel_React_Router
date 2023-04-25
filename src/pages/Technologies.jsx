import React from "react"
import { NavLink } from "react-router-dom"
import data from "../../data.json"
import { useParams } from "react-router-dom"

export default function Technologies() {
    const { id } = useParams()

    const getNav = data.technology.map(item => (
        <NavLink key={(item.id).toString()} to={(item.id).toString()}>{item.id}</NavLink>
    ))

    const renderTechnologyHtml = data.technology.map(item => {
        if (item.id === Number(id)) {
            return (
                <div className="flex" key={item.id}>
                    <div>
                        <p className="uppercase text-white letter-spacing-2">The terminology...</p>
                        <p className="fs-700 uppercase ff-serif">{item.name}</p>
                        <p className="text-accent maintext">{item.description}</p>
                    </div>
                </div>
            )
        }
    })

    const renderTechnologyImageHtml = data.technology.map(item => {
        if (item.id === Number(id)) {
            return (
                <div key={item.id}>
                    <img className="techPortrait" src={item.imageNamePortrait} />
                    <img className="techLandscape" src={item.imageNameLandscape} />
                </div>
            )
        }
    })

    return (
        <div className="technologies-background">
            <div className="positionPage">
                <h2 className="numbered-title"><span>03</span>Space Launch 101</h2>
                <div className="container">
                    <div className="techLandscape">
                        {renderTechnologyImageHtml}
                    </div>
                    <div className="techNav">
                        <nav className="flex">
                            <ul className="number-indicators flex ">
                                {getNav}
                            </ul>
                        </nav>
                    </div>
                    <div>
                        {renderTechnologyHtml}
                    </div>
                    <div className="techPortrait">
                        {renderTechnologyImageHtml}
                    </div>
                </div>
            </div>
        </div>
    )
}
/**/