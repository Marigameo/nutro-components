import React from 'react'
import styles from './ecommerce.module.css'

import ReactImageMagnify from 'react-image-magnify';

export default function ImageMagnify({images, isHintEnabled=false }) {
    return (
        <div className={styles.fluid}>
                <div className={styles.fluid__image_container}>
             <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: images[0],
                        },
                        largeImage: {
                            src: images[1],
                            width: 1200,
                            height: 1800
                        },
                        enlargedImageContainerDimensions: {
                            width: '200%',
                            height: '100%'
                        },
                        isHintEnabled: isHintEnabled,
                        shouldHideHintAfterFirstActivation: false,
                        shouldUsePositiveSpaceLens: true
                    }} />
                    </div>
                    </div>
    )
}
