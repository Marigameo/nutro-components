import React from 'react'
import styles from './style.module.css'

export default function EdButton({type = 'outlined', children}) {
    return (
        <button className={`${styles.btn} ${styles[`btn_${type}`]}`}>{children}</button>
    )
}
