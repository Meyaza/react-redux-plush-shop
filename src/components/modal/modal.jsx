import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCurrentToy} from '../../redux/toys/reducer';
import { ToyBuy } from '../toy-buy';
import { SliderComp } from '../slider/slider';
import './modal.css';

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
               {items 
                ? 
                <div className='modal-item'>
                    <SliderComp images={items.images}/>
                    <div className='modal-item__details'>
                        <span className='modal-item__title'>{items.title}</span>
                        <div className='modal-item__description'>
                            {items.size}
                            {items.description}
                        </div>
                        <div className='modal-item__buy'>
                            <ToyBuy toy={items}/>
                        </div>
                    </div>
                </div>
                : null}
            </div>
        </div>
    );
};

