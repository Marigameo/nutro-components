import React from 'react'
import styles from './style.module.css'

export default function GradientButton({ children, type, onClick, size="normal" }) {

    return (
       <button
        className={`${styles.btn} ${styles.btn_grad} ${styles[`btn_${type}`]} ${styles[`btn_${size}`]}`} 
        onClick={onClick}
        >{children}</button>
    )
}