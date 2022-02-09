import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item/order-item';
import { calcTotalPrice } from '../../components/utils';
import Form from '../../components/UI/form/form';
import './order-page.css';

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
                    <div key={toy.id}>
                        <OrderItem toy={toy}/>
                    </div>
                )}
            </div>
        </div>
    );
};

