import React from 'react'
import './style.css'

function AboutUs (){
    return (
        <div id="homeContainer">
           <img src={"./Text.png"} alt="What we do and what you'll need" className="textimg"/>
           <img src={"./Graphs.png"} alt="Graphs showing revenue based at 70 cents" className="graphs"/>
        </div>
    )
}

export default AboutUs;