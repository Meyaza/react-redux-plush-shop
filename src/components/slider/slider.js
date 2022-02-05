import React from 'react';
import './slider.css';
import {useState, useEffect} from "react";
import { ToyCover } from '../toy-cover';


const Slider = ({images}) => {

    const img = [
        images
    ]
 
    return (
    <div className="slider">
        
        <ToyCover image={images[0]}/>
        
        
    </div>
)
};
export default Slider;