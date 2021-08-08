import './App.css';
import React, {useState} from 'react'
import styles from  './components/Slider/Slider.module.css'
import Slider from './components/Slider/Slider.js'
import one from './components/Slider/Imgs/img1.jpg'
import two from './components/Slider/Imgs/img2.jpg'
import three from './components/Slider/Imgs/img3.jpg'
import four from './components/Slider/Imgs/img4.jpg'
import five from './components/Slider/Imgs/img5.jpg'


function App() {
  const [slideimages,setslideimages] = useState([ one,two,three,four,five])
  return (
    <>
    <div className="App">
      {/*small card using carousel */}
      
    <div className = {styles.card}>
     <Slider 
     size = "sm"
     slideimages = {slideimages}
     autoplay = {3}
     dot = {true}
     />
     <div className = {styles.cardcontent}>
        <h4 className={styles.heading}>SHOES</h4>
        <p className = {styles.cardtext}>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam. </p>
     </div>
     <div className = {styles.footer}>
     <button>SHOP NOW 🥾</button>
     </div>
     </div>
    </div>  
  

  
    <div className = "big-slider">
    <Slider 
     size = "lg"
     slideimages = {slideimages}
     autoplay = {3}
     dot = {true}
     preview = {true}/>
     </div>
    </>
  );
}

export default App;
