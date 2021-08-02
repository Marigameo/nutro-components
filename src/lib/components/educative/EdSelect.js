import React from 'react'
import styles from './style.module.css'

export default function Select({ options }) {
    return (
        <div className={styles.searchWrapper}>
        <select className={`${styles.select} ${styles.text_base}`}>
            {options.map((option) => {
                return <option value={option.id}>{option.name}</option>
            })}
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute pointer-events-none right-2 top-4 inset-y-0"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
    )
}
