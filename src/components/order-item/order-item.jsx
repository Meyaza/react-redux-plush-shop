import React from 'react';
import { useDispatch } from 'react-redux';
import  {AiOutlineCloseCircle} from 'react-icons/ai';
import { ToyCover } from '../toy-cover';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './order-item.css';

export const OrderItem = ({toy}) => {
    const dispath = useDispatch();
    const handleClick = () => {
        dispath (deleteItemFromCart(toy.id))
    }
    return (
        <div className='order-item'>
            <div className='order-item__cover'>
                <ToyCover image={toy.images[0]} />
            </div>
            <div className='order-item__title'>
                <span>{toy.title}</span>
            </div>
            <div className='order-item__price'>
                <span>{toy.price} руб</span>
                <AiOutlineCloseCircle 
                    size={25}
                    className='cart-item__delete-icon'
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

