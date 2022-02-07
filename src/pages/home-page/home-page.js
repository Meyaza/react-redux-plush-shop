import React, { useEffect, useState } from 'react';
import { Modal } from '../../components/modal';
import { ToyItem } from '../../components/toy-item';
import axios from 'axios'
import './home-page.css';
import {Lodaer} from '../../components/UI/lodaer';

export const HomePage = () => {
    const [modalActive, setModalActive] = useState(false);
    const [toys, setToys] = useState(null);
    const [isToysLoading, setIsToysLoading] = useState(false);
    const apiURL = "http://localhost:8000/toys";
    const fetchData = async () => {
        setIsToysLoading(true);
        const response = await axios.get(apiURL)
        setToys(response.data) 
        setIsToysLoading(false);
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='home-page'>
            {isToysLoading
            ? <div className='load'><Lodaer/></div>
            :
                toys &&
                    toys.map(toy => 
                        <div key={toy.id}>
                            <div onClick={() => setModalActive(true)}>
                                <ToyItem toy={toy}  /> 
                            </div>
                        </div>
                    )
                } 
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
};
