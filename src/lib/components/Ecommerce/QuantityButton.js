import React, {useState} from 'react'
import styles from './ecommerce.module.css'

export default function QuantityButton() {
    const [isActive, setActive] = useState(false)
    const [count, setCount] = useState(1)

    const changeQuantity = (operator) => {
        switch(operator) {
            case 'set': 
                setActive(true)
                break;
            case 'minus': 
                count > 1 ? setCount(count - 1) : setActive(false)
                break;
            case 'plus':
                setActive(true)
                setCount(count + 1)
                break;
            default:
                setActive(false)
        }
    }
    return (
        <>
        {!isActive ? 
          <button className={styles.btnInactive} onClick={() =>  changeQuantity('set')}>
                <span>Add</span>
              <span className={styles.plus}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" alt="+" class="ml6"><g fill="none" fill-rule="evenodd"><g fill="var(--primary)" fill-rule="nonzero"><g><g><path d="M6 0c.385 0 .702.29.745.663L6.75.75v10.5c0 .414-.336.75-.75.75-.385 0-.702-.29-.745-.663l-.005-.087V.75C5.25.336 5.586 0 6 0z" transform="translate(-1235 -300) translate(1173 292) translate(62 8)"></path><path d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z" transform="translate(-1235 -300) translate(1173 292) translate(62 8)"></path></g></g></g></g></svg>
              </span>
              </button> :  
              <button className={styles.btnActive}>
                <div className={styles.btnWrapper}>
                  <span className={styles.minus} onClick={() => changeQuantity('minus')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" alt="-"><g fill="none" fill-rule="evenodd"><g fill="var(--primary)" fill-rule="nonzero"><g><g><path d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z" transform="translate(-1181 -300) translate(1173 292) translate(8 8)"></path></g></g></g></g></svg>
                  </span>
                  <div className={styles.quantity}>{count}</div>
                  <span className={styles.plus} onClick={() => changeQuantity('plus')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" alt="+" class="ml6"><g fill="none" fill-rule="evenodd"><g fill="var(--primary)" fill-rule="nonzero"><g><g><path d="M6 0c.385 0 .702.29.745.663L6.75.75v10.5c0 .414-.336.75-.75.75-.385 0-.702-.29-.745-.663l-.005-.087V.75C5.25.336 5.586 0 6 0z" transform="translate(-1235 -300) translate(1173 292) translate(62 8)"></path><path d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z" transform="translate(-1235 -300) translate(1173 292) translate(62 8)"></path></g></g></g></g></svg>
                  </span>
              </div>
                </button> 
            }
        </>
    )
}
