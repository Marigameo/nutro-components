import React, {useState} from 'react'
import styles from './ecommerce.module.css'

export default function EcomToggle() {
    const [isActive, setActive] = useState(false)
    return (
        <label className={styles.customCheckbox} onClick={() => setActive(!isActive)}>
            <span className={styles.checkWrapper}>
                <span className={styles.label}>
                    <input className={styles.toggle} name="vegNonveg" type="checkbox" data-indeterminate="false"/>
                    <svg width="36" height="24" viewBox="0 0 30 20"><g id="components/toggle/disabled" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-29-Copy" transform="translate(0.000000, 1.000000)"><rect id="Rectangle" fill={isActive ? '#17b31b' : '#D9D9D9'} x="0" y="0" width="30" height="18" rx="9"></rect><circle id="Oval" fill="#FFFFFF" cx={isActive ? '21' : '9'} cy="9" r="7"></circle></g></g></svg>
                </span>
            </span>
            <span className={styles.labelText}>Veg only</span>
        </label>
    )
}
