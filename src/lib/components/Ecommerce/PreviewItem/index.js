import React, { useState } from 'react'
import styles from './style.module.css'


export default function PreviewItem(props) {
const [preimg ,setImg] = useState(props.previewimg)


    return (
        <div className = {styles.card}>
            <p className = {styles.heading}>{props.heading}</p>
            <div className = {styles.imgsection}>
                {preimg.map((x, index) => {
                     return (
                    <div key={index}>
                        <a href = {x.to} target = "_blank">
                        <img 
                        src={x.img} 
                        alt = "slider-img"
                        />
                        <p>{x.name}</p>
                        </a>
                    </div>
                    )
                })}
            </div>
            <p><a href ={props.morelink} className = {styles.footer}>See More</a></p>
        </div>

    )
}
