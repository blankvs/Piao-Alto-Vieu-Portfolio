import React, { useState } from "react"
import '../css/Website.css'
import ImgComp from './ImgComp'

import Ekans1 from '../assets/Ekans1.png'
import EKANS2 from '../assets/EKANS2.png'

function Slider2() {


    let ekansArr = [<ImgComp src={Ekans1} />, <ImgComp src={EKANS2}/>]
    const [x, setX] = useState(0)
    const goLeft = () => {
        console.log(x)
        setX(x + 100)
        x === 0 ? setX(-100 * (ekansArr.length - 1)) : setX(x + 100)
    }
    const goRight = () => {
        console.log(x)
        x === -100 * (ekansArr.length - 1) ? setX(0) : setX(x - 100)
    }


    return (
        <div>
            <div className="slider-2">
                {ekansArr.map((item, index) => {
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

export default Slider2