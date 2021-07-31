import React from 'react'
import './style.css'

const getActiveTemplate = (size) => {
    return(
        <div className="avatar-active">
            <div className={`cl-avatar avatar-${size}`}></div>
        </div>
    )
}

const getNormalTemplate = (size) => {
    return(
        <div className={`cl-avatar avatar-${size}`}></div>
    )
}

export default function ClubhouseAvatar({size, isActive}) {
    const avatarSize = size ? size : 'md'
    const template = isActive ? getActiveTemplate(avatarSize) : getNormalTemplate(avatarSize)
    return template
}
