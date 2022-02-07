import React, { useEffect, useState } from 'react';
import { Modal } from '../../components/modal';
import { ToyItem } from '../../components/toy-item';
import axios from 'axios'
import './home-page.css';

export const HomePage = () => {
    const [modalActive, setModalActive] = useState(false);
    const [toys, setToys] = useState(null);
    const apiURL = "http://localhost:8000/toys";
    const fetchData = async () => {
        const response = await axios.get(apiURL)
        setToys(response.data) 
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='home-page'>
            {toys &&
                toys.map(toy => 
                    <div className='' key={toy.id}>
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
