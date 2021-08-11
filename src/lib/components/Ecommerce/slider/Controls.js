import React from "react";
import styles from  './slider.module.css'
import leftArrow from "./images/left-arrow.png";
import rightArrow from "./images/right-arrow.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? `${styles.btnslide} ${styles.next}` : `${styles.btnslide} ${styles.prev}`}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} className = {styles.btnimg} alt='productimage' />
    </button>
  );
}