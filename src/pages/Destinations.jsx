import React from "react"
import { NavLink } from "react-router-dom"
import data from "../../data.json"
import { useParams } from "react-router-dom"

export default function Destinations() {

    const { id } = useParams()

    const getNav = data.destinations.map(item => (
        <NavLink key={item.name} to={(item.name).toLowerCase()} className="underline uppercase text-white letter-spacing-2 navwrap">{item.name}</NavLink>
    ))

    const renderDestinationHtml = data.destinations.map(item => {
        if ((item.name).toLowerCase() === id) {
            return (
                <div key={item.name}>
                    <p className="fs-800 uppercase ff-serif destinationName">{item.name}</p>
                    <p className="text-accent maintext">{item.description}</p>
                    <div className="flex specs" >
                        <div className="distance">
                            <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. Distance</p>
                            <p className="fs-500 ff-serif uppercase">{item.distance}</p>
                        </div>
                        <div>
                            <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Est. time travel</p>
                            <p className="fs-500 ff-serif uppercase">{item.travel}</p>
                        </div>
                    </div>
                </div>
            )
        }
    })

    const renderDestinationImageHtml = data.destinations.map(item => {
        if ((item.name).toLowerCase() === id) {
            return (
                <img src={(item.images)} className="planetImgSize" key={item.name} />
            )
        }
    })

    return (
        <div className="destinations-background ">
            <div className="positionPage">
                <h2 className="numbered-title"><span>01</span>Pick your destination</h2>
                <div className="container">
                    <div></div>
                    <div className="planetImg">
                        {renderDestinationImageHtml}
                    </div>
                    <div>
                        <nav>
                            <ul className="primary-navigation underline-indicators flex secondaryNav">
                                {getNav}
                            </ul>
                        </nav>
                        <div>
                            {renderDestinationHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
