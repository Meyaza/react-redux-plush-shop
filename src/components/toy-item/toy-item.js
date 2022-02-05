import React, { useState } from "react";
import { ToyCover } from '../toy-cover';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './toy-item.css';
import { ToyBuy } from '../toy-buy/toy-buy';
import { Modal } from '../modal/modal';
import { setCurrentToy } from "../../redux/toys/reducer";


export const ToyItem = ({toy}) => {
 
    const dispatch = useDispatch();
    const items = useSelector(state => state.toy.currentToy);


    const handleClick = (e) => {
       

            dispatch(setCurrentToy(toy))
        
    }
    return (
        
        <div className='toy-item' onClick={handleClick}>
        
            <ToyCover image={toy.image}/>
            
            <div className='toy-item__details'>
                <span className='toy-item__title'>{toy.title}</span>
                <div className='toy-item__description'>
                    {toy.size}
                </div>
                <div className='toy-item__buy'>
                    <ToyBuy toy={toy}/>
                </div>
            </div>
        </div>
     
    );
};

export default ToyItem;