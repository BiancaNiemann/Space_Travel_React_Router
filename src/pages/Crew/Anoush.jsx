import React from "react";
import anoushImage from "../../images/crews/image-anousheh-ansari.png"

export default function Anoush(){
    return (
        <div>
             <p className="fs-600 uppercase ff-serif">Flight Engineer</p>
             <p className="fs-700 uppercase ff-serif">Anousheh Ansari</p>
             <p className="text-accent">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
            <img src={anoushImage}/>
        </div>
    )
}