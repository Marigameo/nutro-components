import React from 'react'
import styles from './ecommerce.module.css'
import veg from './images/veg.svg'
import nonveg from './images/non-veg.svg'
import QuantityButton from './QuantityButton'

export default function Card({product}) {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardImage}>
                <div className={styles.imageContainer}>
                    <img src={product.image} alt="burger" width="297" height="223"/>
                </div>
            </div>
            <div className={styles.productDetails}>
                <div>{product.name}</div>
                <div className={styles.details}>
                    <div className={styles.IconWrapper}>
                    <div className={styles.IconContainer}>
                        <img src={ product.isVeg ? veg : nonveg } alt='vegnonveg' className={styles.icon}/>
                    </div>
                </div>
                <div className={styles.lightText}>{product.description}</div>
            </div>
                <div className={styles.bottomSection}>
                    <div className={styles.priceWrapper}>
                        <div className={styles.finalPrice}>{product.discountedPrice} </div>
                        <div className={styles.actualPrice}>{product.actualPrice}</div>
                    </div>
                    <QuantityButton/>
                </div>
            </div>
        </div>
    )
}
