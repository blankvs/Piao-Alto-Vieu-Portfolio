import React, { useState } from "react"
import '../css/Website.css'
import ImgComp from './ImgComp'

import VV1 from '../assets/VV1.png'
import VV2 from '../assets/VV2.png'
import VV3 from '../assets/VV3.png'
import VV4 from '../assets/VV4.png'


function Slider3() {

    let vvArray = [<ImgComp src={VV1} />, <ImgComp src={VV2}/>, <ImgComp src={VV3} />, <ImgComp src={VV4} />]
    const [x, setX] = useState(0)
    const goLeft = () => {
        console.log(x)
        setX(x + 100)
        x === 0 ? setX(-100 * (vvArray.length - 1)) : setX(x + 100)
    }
    const goRight = () => {
        console.log(x)
        x === -100 * (vvArray.length - 1) ? setX(0) : setX(x - 100)
    }


    return (
        <div>
            <div className="slider-2">
                {vvArray.map((item, index) => {
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

export default Slider3