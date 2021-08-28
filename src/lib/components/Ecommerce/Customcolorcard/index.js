import React, { useState } from 'react'
import styles from './style.module.css'

export default function Cutomcolorcard(props) {
   
const [img, setimg] = useState(props.colorimg)
const size = props.size || false;
const heading = props.heading;
const price = props.price;

const [slideIndex, setSlideIndex] = useState(1);
const [sizeno,setSizeno] = useState(1);

const moveDot = index => 
{
    setSlideIndex(index);
}
const movesize = index => 
{
    setSizeno(index);
}
    return (

      <div className = {styles.card}>
        <div className = {styles.content}>
        {img.map((x, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? `${styles.imgs}` +' '+ `${styles.activeanim}` : `${styles.imgs}`}
                    >
                        <img 
                        src={x.img} 
                        alt = "slider-img"
                        />
                    </div>
                )
            })}

        </div>
        <div className = {styles.info}>
            <div className = {styles.name}>
               <div>
                   <p>{heading}</p>
               </div>
            </div>
            <div className = {styles.price}>
                 <p>{price}</p>
               </div>
        </div>
        {size == true ?
        <div>
        <p className = {styles.namesize}>Size</p>
        <div className = {styles.size}>
            {img.map((x, index) =>
            (
                <div 
                onClick = {() => movesize(index + 1)}
                className={sizeno === index + 1 ? `${styles.sizeno}` + ' ' + `${styles.activesizeno}` : `${styles.sizeno}`}
                >
                    {x.size}
                </div>
            ))}
        </div>
        </div>
        : null}
        <p className = {styles.namesize}>Color</p>
        <div className={styles.containerdots}>
                {img.map((x, index) => (
                    <div 
                    onClick={() => moveDot(index +1)}
                    className={slideIndex === index + 1 ? `${styles.dot}` + ' ' + `${styles.active}` : `${styles.dot}`}
                    style = {{background:x.color}}
                    ></div>
                ))}
            </div>
        <p></p>
        <div className = {styles.footerone}>
          <button style = {{width:120,background:"#ffe11b"}} onClick = {props.onClick}>BUY NOW</button>
        </div>
      </div>

    )
}
