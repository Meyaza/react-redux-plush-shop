import React from "react";
import { useDispatch } from 'react-redux';
import { pulse } from 'react-animations';
import { ToyCover } from '../toy-cover';
import { ToyBuy } from '../toy-buy/toy-buy';
import { setCurrentToy } from "../../redux/toys/reducer";
import styled, { keyframes } from 'styled-components';
import './toy-item.css';

const Pulse = styled.div`
    :hover {animation: 2s ${keyframes`${pulse}`} infinite}
`;

export const ToyItem = ({toy}) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
            dispatch(setCurrentToy(toy))
    }
    return (
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
    );
};
