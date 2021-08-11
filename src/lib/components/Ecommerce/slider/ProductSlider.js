import React, { useEffect, useState, useRef } from 'react'
import styles from  './slider.module.css'
import BtnSlider from './Controls'

export default function Slider(props) {

    const { dot, preview, autoplay, slideimages, size } = props
    const [slideIndex, setSlideIndex] = useState(1);
    const autoPlayRef = useRef();

    useEffect(() => {
        autoPlayRef.current = nextSlide
    })

    useEffect (()=>
    {
        const play = () => { 
            autoPlayRef.current()
        }
        let interval
        if(autoplay !== null) {
            interval = setInterval(play, autoplay * 1000)
        }
        return(() => clearInterval(interval))
    },[])


    const nextSlide = () => {
        if (slideIndex === slideimages.length){
            setSlideIndex(1)
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }

    const prevSlide = () => {
        if (slideIndex === 1){
            setSlideIndex(slideimages.length)
        } else {
            setSlideIndex(slideIndex - 1)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
        <div className={ size === "sm"?`${styles.smallslider}`:`${styles.largeslider}`}>
            { slideimages.map((x, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? `${styles.slide} ${styles.activeanim}` : `${styles.slide}`}
                    >
                        <img 
                        src={x} 
                        alt = "slider-img"
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}  />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
           {dot === true?
            <div className={styles.containerdots}>
                { slideimages.map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? `${styles.dot} ${styles.active}` : `${styles.dot}`}
                    ></div>
                ))}
            </div>
            :null}
        </div>
     { preview === true ?
        <div className = {styles.preview}>
                { slideimages.map((x, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? `${styles.previewimg} ${styles.active}` : `${styles.previewimg}`}
                    
                    >
                    <img src={x}  alt = "slider-img"
                        /> 
                    </div>
                ))}
        </div>
    : null}
    </>
    )
}
