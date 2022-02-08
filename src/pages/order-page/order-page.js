import { OrderItem } from '../../components/order-item/order-item';
import { calcTotalPrice } from '../../components/utils';
import './order-page.css';
import Form from '../../components/UI/form/form';
import { useSelector } from 'react-redux';

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)
  

    if (items.length < 1){
        return <h1>Ваша корзина пуста</h1>
    }
    return (
         <div className='order'>
        <h1>
        {items.length} товаров на сумму {calcTotalPrice(items)} руб.
        </h1>
            <Form items= {items}/>
            <div className=''>
                {items.map(toy => 
                <div>
                <OrderItem key={toy.id} toy={toy}/>
                </div>
                )}
            </div>
        </div>
    );
};

