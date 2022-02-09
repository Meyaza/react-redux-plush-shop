import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Lodaer } from '../../components/UI/loader';
import { Button } from '../../components/button';
import './push-page.css';


const PushPage = () => {
    const [isToysLoading, setIsToysLoading] = useState(false);
    const [toys, setToys] = useState([]);
    const apiURL = "http://localhost:8000/requests";
    const fetchData = async () => {
        setIsToysLoading(true);
        const response = await axios.get(apiURL)
        setToys(response.data) 
        setIsToysLoading(false);
    }
    useEffect(() => {
        fetchData()
    }, [])
    if (toys === []) {
        return <h1>У вас нет заказов</h1>
    }
    return (
        <div className='main'>
            {isToysLoading
            ? <div className='load'><Lodaer/></div>
            :
                <div className=''>
                    {toys.length === 0 ? <h1>У вас нет активных заказов</h1> : 
                        <div className='main'>
                            <h1>Ваши заказы</h1>
                            {toys.map(toys  => 
                                <div key={toys.id} className='item'>
                                    <div className='toys-block'>
                                        {toys.toy.map(toy => <div key={toy} className='toy'>{toy}</div>)} 
                                    </div>
                                    <div className='price'>Сумма: {toys.total}</div>
                                    <form className='buttton'>
                                        <Button type='primary' onClick={() => axios.delete(`http://localhost:8000/requests/${toys.id}`)}>
                                            Отменить заказ
                                        </Button>
                                    </form>
                                </div>           
                                )    
                            }              
                        </div>
                    }
                </div>
            }    
        </div>
    );
};
export default PushPage;