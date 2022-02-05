import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import { Button } from '../button';
import { CartItem } from '../cart-item';
import { calcTotalPrice } from '../utils';

import './cart-menu.css';

export const CartMenu = ({items, onClick,}) => {




    return (

        <div className='cart-menu'>
            <div className='cart-menu__toys-list'>
                {items.length > 0 ? items.map((toy) => <CartItem toy={toy} key={toy.title} price={toy.price} title={toy.title} id={toy.id}
                
                />) : 'Корзина пуста'}
    
            </div>

            {items.length > 0 ? (
                <div className='cart-menu__arrange'>
                    <div className='cart-menu__total-price'>
                        <span>Итого:</span>
                        <span>{calcTotalPrice(items)} руб</span>
                    </div>
                    <Button type='primary' size="m" onClick={onClick}>
                        Оформить заказ
                    </Button>
                </div>
                
            ) : null}
        </div>
    );
};

