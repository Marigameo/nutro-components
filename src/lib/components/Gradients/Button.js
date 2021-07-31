import React from 'react'
import './style.css'

export default function GradientButton({ children, type, onClick, size="normal" }) {

    return (
       <button
        className={`btn btn-grad btn-${type} btn-${size}`} 
        onClick={onClick}
        >{children}</button>
    )
}