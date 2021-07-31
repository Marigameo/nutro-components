import React from 'react'
import styles from './style.module.css'

export default function ClubhouseCard(props) {
    const variant = props?.variant ? props.variant : 'short' 
    return (
        <div className={`${styles.cl_card} ${styles.text_center} ${styles[`card_${variant}`]}`}>
            {props.children}
        </div>
    )
}
