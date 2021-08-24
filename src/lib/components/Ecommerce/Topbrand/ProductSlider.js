import React, { useEffect, useState, useRef } from 'react'
import styles from  './slider.module.css'


export default function Topbrands(props) {

    const [slideimages, setslideimages] = useState(props.brandimages)
    const autoplay = 6;
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
        <div className={ styles.largeslider}>
            { slideimages.map((x, index) => {
                return (
                 <>
                 
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? `${styles.slide} ${styles.activeanim}` : `${styles.slide}`}
                    >
                     <img src={x.imgone} alt = "slider-img" />

                     <img src={x.imgtwo} alt = "slider-img"/>

                     <img src={x.imgthree} alt = "slider-img" />

                     <img src={x.imgfour} alt = "slider-img"  />

                     <img src={x.imgfive} alt = "slider-img"  />

                    </div>
                    </>
                )
            })}
            <div className={styles.containerdots}>
                { slideimages.map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? `${styles.dot} ${styles.active}` : `${styles.dot}`}
                    ></div>
                ))}
            </div>
        </div>
        

    </>
    )
}
