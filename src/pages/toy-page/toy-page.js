import React from 'react';
import { useSelector } from 'react-redux';
import { ToyBuy } from '../../components/toy-buy';

import { ToyCover } from '../../components/toy-cover';


import './toy-page.css';

export const ToyPage = () => {
    const toy = useSelector(state => state.toy.currentToy)

    if(!toy) return null;

    return (
        <div className='toy-page'>
            <h1 className='toy-page__title'>{toy.title}</h1>
            <div className='toypage__content'>
                <div className='toy-page__left'> 
                </div>
                <div className='toy-page__right'>
                    <ToyCover image={toy.image}/>
                    <p>{toy.description}</p>
                    <p className='secondary-text'>Популярные метки этого продукта:</p>
                    
                    <div className='toy-page__btoy'>
                        <ToyBuy toy={toy}/>
                    </div>
                </div>
            </div>  
        </div>
    );
};

