import React, { useState } from "react"
import '../css/Website.css'

//IMG For NoteNett
import ImgComp from './ImgComp'
import NNLand from '../assets/NNLand.png'
import NNReg from '../assets/NNReg.png'
import NNN1 from '../assets/NNN1.png'
import NNN2 from '../assets/NNN2.png'
import NNN3 from '../assets/NNN3.png'
import NNN4 from '../assets/NNN4.png'
import NNA from '../assets/NNA.png'

//IMG For Ekans
import Ekans1 from '../assets/Ekans1.png'


function Slider() {

    let sliderArr = [<ImgComp src={NNLand} ></ImgComp>, <ImgComp src={NNReg} />, <ImgComp src={NNN1} />, <ImgComp src={NNN2} />, <ImgComp src={NNN3} />, <ImgComp src={NNN4} />, <ImgComp src={NNA} />]
    const [x, setX] = useState(0)
    
    const goLeft = () => {
        console.log(x)
        setX(x + 100)
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
    }
    const goRight = () => {
        console.log(x)
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    }


    return (
        <div>

            {/* NOTENETT */}
            <div className="slider">
                {sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{ transform: `translateY(${x}%)` }}>
                            {item}
                        </div>
                    )
                })
                }

            </div>
            <div className="buttonWrap">
                <p className="goLeft" onClick={goLeft}>BACK</p>
                <p className="goRight" onClick={goRight}>FWD</p>
            </div>
        </div>
    )
}

export default Slider