import React, { useState } from "react"
import '../css/Website.css'
import ImgComp from './ImgComp'
// import i1 from ""

function Slider() {

    let sliderArr = [1, 2, 3, 4, 5]
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
        <div className="slider">

            { sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{ transform: `translateY(${x}%)` }}>
                        <button className="goLeft" onClick={goLeft}>left</button>
                        {item}
                        <button className="goRight" onClick={goRight}>right</button>
                    </div>
                )
            })
            }

        </div>
    )
}

export default Slider