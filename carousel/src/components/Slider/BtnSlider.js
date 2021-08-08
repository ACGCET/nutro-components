import React from "react";
import styles from  './Slider.module.css'
import leftArrow from "./Icons/left-arrow1.png";
import rightArrow from "./Icons/right-arrow1.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? `${styles.btnslide}` + ' ' + `${styles.next}` : `${styles.btnslide}` + ' ' +  `${styles.prev}`}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} className = {styles.btnimg} />
    </button>
  );
}