import React from "react"
import { Link, Outlet } from "react-router-dom"
import data from "../data.json"
import { useParams } from "react-router-dom"
import moon from "../images/destinations/image-moon.png"
import mars from "../images/destinations/image-mars.png"
import titan from "../images/destinations/image-titan.png"
import europa from "../images/destinations/image-europa.png"

export default function Destinations() {

    const {id} = useParams()

    const getNav = data.destinations.map(item => (
        <Link key={item.name} to={(item.name).toLowerCase()} className="underline uppercase text-white letter-spacing-2">{item.name}</Link>
    ))

    const renderDestinationHtml = data.destinations.map(item => {
        if ((item.name).toLowerCase() === id){
            return(
                <div className="flex" key={item.name}> 
                <img className="planetImg" src={(item.name).toLowerCase()} />
                <div className="destinationtext">
                <p className="fs-800 uppercase ff-serif">{item.name}</p>
                <p className="text-accent">{item.description}</p>
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
    
            </div>
            )
        }
    })

    return (
        <div className="destinations-background ">
            <div className="pos-abs destinationPage">
                <h2 className="numbered-title"><span>01</span>Pick your destination</h2>
                <nav className="flex destinationNav">
                    <ul className="primary-navigation underline-indicators flex ">
                        {getNav}
                    </ul>
                </nav>
                {renderDestinationHtml}
            </div>
        </div>
    )
}