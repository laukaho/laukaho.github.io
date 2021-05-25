import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export default function Banner() {
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [sliderRef, slider] = useKeenSlider({
      loop: true,
      initial: 0,
      duration: 1000,
      dragStart: () => {
        setPause(true)
      },
      dragEnd: () => {
        setPause(false)
      },
      slideChanged(s) {
        setCurrentSlide(s.details().relativeSlide)
      },
    })
  
    React.useEffect(() => {
      sliderRef.current.addEventListener("mouseover", () => {
        setPause(true)
      })
      sliderRef.current.addEventListener("mouseout", () => {
        setPause(false)
      })
    }, [sliderRef])
  
    React.useEffect(() => {
      timer.current = setInterval(() => {
        if (!pause && slider) {
          slider.next()
        }
      }, 2000)
      return () => {
        clearInterval(timer.current)
      }
    }, [pause, slider])

    
    return(
        <>
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <div className="slide">
                </div>
            </div>
            <div className="keen-slider__slide number-slide2">
                <div className="slide">
                </div>
            </div>
        </div>
        {slider && (
        <div className="dots">
            {[...Array(slider.details().size).keys()].map((idx) => {
            return (
                <button
                key={idx}
                onClick={() => {
                    slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
                />
            )
            })}
        </div>
        )}
        </>
    )
}