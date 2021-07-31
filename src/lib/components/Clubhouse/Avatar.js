import React from 'react'
import styles from './style.module.css'

const getActiveTemplate = (size) => {
    return(
        <div className={styles.avatar_active}>
            <div className={`${styles.cl_avatar} ${styles[`avatar_${size}`]}`}></div>
        </div>
    )
}

const getNormalTemplate = (size) => {
    return(
        <div className={`${styles.cl_avatar} ${styles[`avatar_${size}`]}`}></div>
    )
}

export default function ClubhouseAvatar({size, isActive}) {
    const avatarSize = size ? size : 'md'
    const template = isActive ? getActiveTemplate(avatarSize) : getNormalTemplate(avatarSize)
    return template
}
