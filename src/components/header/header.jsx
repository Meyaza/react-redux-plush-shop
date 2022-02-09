import React from 'react';
import {Link} from 'react-router-dom';
import {CartBlock} from '../cart-block'
import './header.css';

export const Header = () => {
    return (
        <div className='header'>
            <div className='wrapper'>
                <Link to='/' className='header_store_title'>
                    Plush Toy Store
                </Link>
                <Link to='/push' className='push-link'>
                    Ваши заказы
                </Link>
            </div>
            <div className='wrapper header__cart-btn-wrapper'>
                <CartBlock/>
            </div>
        </div>
    );
};

