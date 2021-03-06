import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './cart-item.css';

export const CartItem = ({
    toy,
    title,
    price,
}) => {
    const dispath = useDispatch();
    const handleClick = () => {
        dispath (deleteItemFromCart(toy.id))
    }
    return (
        <div className='cart-item'>
            <span>{title}</span>
            <div className='cart-item__price'>
                <span>{price} руб</span>
            </div>
            <AiOutlineCloseCircle 
                size={25}
                className='cart-item__delete-icon'
                onClick={handleClick}
            />
        </div>
    );
};

