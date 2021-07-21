import React from 'react'
import './style.css'

const getActiveTemplate = (size) => {
    return(
        <div className="avatar-active">
            <div className={`cl-avatar avatar-${size}`}></div>
        </div>
    )
}

const getNormalTemplate = (size) => <div className={`cl-avatar avatar-${size}`}></div>

export default function Avatar({size, isActive}) {
    const template = isActive ? getActiveTemplate(size) : getNormalTemplate(size)
    return template
}
