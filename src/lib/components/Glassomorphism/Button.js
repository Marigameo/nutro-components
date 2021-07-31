import React from 'react'
import styles from './style.module.css'

export default function Button({ children, onClick, size="normal" }) {

    return (
       <button
        className={`${styles.btn} ${styles.btn_glass} ${styles[`btn_${size}`]}`} 
        onClick={onClick}
        >{children}</button>
    )
}