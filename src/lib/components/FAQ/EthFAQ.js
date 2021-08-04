import React, { useState } from 'react'
import styles from './style.module.css'


export default function EthFAQ({ faqs, title = 'Frequently asked questions'}) {
    const [faq, setFaq] = useState(faqs)

    const toggleActive = (index) => {
        let faqCopy = faq
        faqCopy.forEach((faq, i) => (index===i) ? faq.isActive = !faq.isActive : faq.isActive = false)
        setFaq([...faqCopy])
    }
    return (
        <div className={styles.EthfaqWrapper}>
            <h2 className={styles.headerText}>{title}</h2>
            <div className={styles.faqContainer}>
                <div className={styles.expandableCard}>
                    {faqs.map((faq, index) => {
                        return(
                            <div className={styles.question}>
                        <div className={styles.divident}>
                            <div className={styles.leftSection}>
                            <h3>{faq.question}</h3>
                            <p className={styles.answer}>{faq.answer}</p>
                        </div>
                        <div className={styles.rightSection} onClick={() => toggleActive(index)}>
                            More
                        </div>
                        </div>
                        {faq.isActive ? <div className={styles.moreData}>
                            {faq.more}
                        </div> : null }
                    </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
