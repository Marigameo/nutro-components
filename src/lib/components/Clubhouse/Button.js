import React from 'react'
import styles from './style.module.css'

export default function ClubhouseButton({type, children}) {
    const buttonType = type ? type : 'outline'
    return (
       <button className={`${styles.btn} ${styles.btn_rounded} ${styles[`btn_${buttonType}`]}`}>{children}</button>
    )
}
