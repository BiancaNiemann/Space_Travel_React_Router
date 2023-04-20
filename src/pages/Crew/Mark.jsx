import React from "react";
import markImage from "../../images/crews/image-mark-shuttleworth.png"

export default function Mark(){
    return (
        <div>
             <p className="fs-600 uppercase ff-serif">Mission Specialist</p>
             <p className="fs-700 uppercase ff-serif">Mark Shuttleworth</p>
             <p className="text-accent">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind   the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
            <img src={markImage}/>
        </div>
    )
}