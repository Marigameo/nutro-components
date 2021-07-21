import React from 'react'

export default function Button({type, children}) {
    return (
       <button className={`btn btn-rounded btn-${type}`}>{children}</button>
    )
}
