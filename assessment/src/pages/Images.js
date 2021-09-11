import './Hero.scss'
import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
// import {CustomCursor} from '../components/CustomCursor';


function Images(){
    
    return (
        <div className="page-wrapper">
         <ImageSlider slides={SliderData}/>
         {/* <CustomCursor/> */}
      </div>
    )
}

export default Images;




