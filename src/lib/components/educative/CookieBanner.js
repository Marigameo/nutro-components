import React, { useState } from 'react'
import styles from './style.module.css'

const CookieBanner = ({ cookieText, buttonText }) => {
    const [isClosed, setClosed] = useState(false)
    return(
        isClosed ? null :
        <div className={styles.cookie_banner}>
            <p className={styles.text_base} dangerouslySetInnerHTML={{__html: cookieText}}></p>
            <button className={styles.action_btn} onClick={() => setClosed(true)}>{buttonText}</button>
        </div>
    )
}

export default CookieBanner
