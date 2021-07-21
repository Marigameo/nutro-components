import React from 'react'

export default function Button({type, children}) {
    const buttonType = type ? type : 'outline'
    return (
       <button className={`btn btn-rounded btn-${buttonType}`}>{children}</button>
    )
}
