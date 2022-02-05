
import cl from './modal.css';
import React from 'react';
import { ToyCover } from '../toy-cover';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCurrentToy} from '../../redux/toys/reducer';
import { ToyBuy } from '../toy-buy';

export const Modal = ({active, setActive}) => {
    const items = useSelector(state => state.toy.currentToy);
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(deleteCurrentToy());
        setActive(false)
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={handleClick}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
               { items ? 
                <div className='toy-item1'>
                            <ToyCover image={items.image}/>
                            
                            <div className='toy-item__details1'>
                                <span className='toy-item__title1'>{items.title}</span>
                                <div className='toy-item__description1'>
                                    {items.size}
                                    {items.description}
                                </div>
                                <div className='toy-item__buy1'>
                                    <ToyBuy toy={items}/>
                                </div>
                            </div>
                </div>
               : null}
            </div>
        </div>
    );
};

