import React, { useState } from "react";
import { ToyCover } from '../toy-cover';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './toy-item.css';
import { ToyBuy } from '../toy-buy/toy-buy';
import { Modal } from '../modal/modal';
import { setCurrentToy } from "../../redux/toys/reducer";
import { pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';
export const ToyItem = ({toy}) => {
 
    const dispatch = useDispatch();
    const items = useSelector(state => state.toy.currentToy);
    const Pulse = styled.div`
    :hover {animation: 2s ${keyframes`${pulse}`} infinite}
    
    `;

    const handleClick = (e) => {
       

            dispatch(setCurrentToy(toy))
        
    }
    return (
        <div>
        <Pulse>
        <div className='toy-item' onClick={handleClick}>
        
            <ToyCover image={toy.images[0]}/>
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
        </Pulse>
        </div>
    );
};

export default ToyItem;