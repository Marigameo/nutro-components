import React from 'react'
import './style.css'

export default function ClubhouseCard(props) {
    return (
        <div className={`cl-card text-center card-${ props?.variant}`}>
            {props.children}
        </div>
    )
}
