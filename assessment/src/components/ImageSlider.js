import React, {useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { Button } from './Button';
import {useHistory} from 'react-router-dom';
import "./Button.scss";

const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const history = useHistory();

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
  }

  console.log(current);

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

    return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        
        {SliderData.map((slide, index)=>{
        return (
            <div className={index === current ? 'slide active': 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt="music image" className='image'/>)}               
            </div>
        )
      })}
      </section>
      <div id="container">
      <Button
        className='imgBtn'    
        onClick={()=>{history.push('/pricing');}}
        type="button"
        buttonStyle="imgBtn--primary--outline"
        buttonSize="imgBtn--large"
        >Buy Now 
      </Button>
      </div>
    </>
    )
};

export default ImageSlider;
