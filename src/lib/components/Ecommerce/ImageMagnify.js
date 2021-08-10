import React from 'react'
import styles from './ecommerce.module.css'
import watchImg687 from './images/wristwatch_687.jpeg';
import watchImg1200 from './images/wristwatch_1200.jpeg';
import ReactImageMagnify from 'react-image-magnify';

export default function ImageMagnify() {
    return (
        <div className={styles.fluid}>
                <div className={styles.fluid__image_container}>
             <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: watchImg687,
                        },
                        largeImage: {
                            src: watchImg1200,
                            width: 1200,
                            height: 1800
                        },
                        enlargedImageContainerDimensions: {
                            width: '200%',
                            height: '100%'
                        },
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false,
                        shouldUsePositiveSpaceLens: true
                    }} />
                    </div>
                    </div>
    )
}
