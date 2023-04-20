import React from "react";
import launchImage from "../../images/technology/image-launch-vehicle-portrait.jpg"

export default function Launch(){
    return(
        <div>
            <img src={launchImage} />
            <p className="uppercase text-white letter-spacing-2">The terminology...</p>
            <p className="fs-700 uppercase ff-serif">Launch Vehicle</p>
            <p className="text-accent">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
        </div>
    )
}
