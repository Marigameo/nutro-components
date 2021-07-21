import React from 'react'
import './style.css'

export default function ClubhouseCard(props) {
    const variant = props?.variant ? props.variant : 'short' 
    return (
        <div className={`cl-card text-center card-${ variant }`}>
            {props.children}
        </div>
    )
}
