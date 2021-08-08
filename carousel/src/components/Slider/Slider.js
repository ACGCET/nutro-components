import React, {useEffect, useState,useRef} from 'react'
import styles from  './Slider.module.css'
import BtnSlider from './BtnSlider'
export default function Slider(props) {
  console.log(props)
    const [slideIndex, setSlideIndex] = useState(1);
    const [dot,setdot] = useState(props.dot);
    const [preview , setpreview] = useState (props.preview)
    const autoPlayRef = useRef();

    
    useEffect(() => {
  autoPlayRef.current = nextSlide
    })
    useEffect (()=>
    {
        
        const play = () =>
        { 
            autoPlayRef.current()
        }
        if(props.autoplay == null)
        {
       // const interval = setInterval(play,props.autoplay * 1000)
        }
        else
        {
            const interval = setInterval(play,props.autoplay * 1000)  
        }
    
    },[])


    const nextSlide = () => {
        if(slideIndex !== props.slideimages.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === props.slideimages.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(props.slideimages.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
        <div className={props.size =="sm"?`${styles.smallslider}`:`${styles.largeslider}`}>
            {props.slideimages.map((x, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? `${styles.slide}` +' '+ `${styles.activeanim}` : `${styles.slide}`}
                    >
                        <img 
                        src={x} 
                        alt = "slider-img"
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}  />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
           {dot == true?
            <div className={styles.containerdots}>
                {props.slideimages.map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? `${styles.dot}` + ' ' + `${styles.active}` : `${styles.dot}`}
                    ></div>
                ))}
            </div>
            :null}
        </div>
     { preview == true ?
        <div className = {styles.preview}>
                {props.slideimages.map((x, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? `${styles.previewimg}` + ' ' + `${styles.active}` : `${styles.previewimg}`}
                    
                    >
                    <img src={x}  alt = "slider-img"
                        /> 
                    </div>
                ))}
        </div>
    : null}
    </>
    )
}
