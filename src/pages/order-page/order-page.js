import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item/order-item';
import { calcTotalPrice } from '../../components/utils';
import axios from 'axios'
import './order-page.css';
import { deleteAllItemFromCart } from '../../redux/cart/reducer';
import { useHistory } from 'react-router-dom';
import {Lodaer} from '../../components/UI/lodaer';
import { Button } from '../../components/button';

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [isToysLoading, setIsToysLoading] = useState(false);
    const history = useHistory();
    const dispath = useDispatch();

    if (items.length < 1){
        return <h1>Ваша корзина пуста</h1>
    }
    const handleClick = async (e) =>  {
    e.preventDefault()
    const choise =  items.map (toy => toy.title)
    const total = calcTotalPrice(items)
    setIsToysLoading(true);
    await axios.post('http://localhost:8000/requests', {
        name: name,
        phone: phone,
        toy : choise,
        total: total
    })
    setIsToysLoading(false);
    dispath(deleteAllItemFromCart())
    history.push("/push");
    }

   
        

    return (
        isToysLoading
         ? <div className='load'><Lodaer/></div> 
         : <div className='order'>
            <div className=''>
                {items.map(toy => <OrderItem key={toy.id} toy={toy}/>)}
            </div>
            <div className=''>
                <div className=''>
                    <h1>
                       {items.length} товаров на сумму {calcTotalPrice(items)} руб.
                    </h1>
                </div>
            </div>
            <form className='form'>
                <input className='form_input'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type='text'
                    placeholder='Ваше имя'
                >
                </input> <br></br>
                <input className='form_input'
                   value={phone}
                   onChange={e => setPhone(e.target.value)}
                   type='text'
                   placeholder='Ваш телефон'
                >
                </input> <br></br>
                <Button onClick={handleClick}
                type='primary'
                >Сделать заказ</Button>
            </form>
        </div>
    );
};

