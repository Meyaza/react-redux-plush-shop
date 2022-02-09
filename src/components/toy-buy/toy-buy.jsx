import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import { Button } from '../button';
import './toy-buy.css';

export const ToyBuy = ({toy}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === toy.id);
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(toy.id));
        } else {
            dispatch(setItemInCart(toy))
        }
    }
    return (
        <div className='toy-buy'>
            <span className='toy-buy__price'>{toy.price} руб.</span>
            <Button
                type={isItemInCart ? 'secondary' : 'primary'}
                onClick= {handleClick}
            >
                {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
            </Button>
        </div>
    );
};

