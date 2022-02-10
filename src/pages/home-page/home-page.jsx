import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from '../../components/modal';
import { ToyItem } from '../../components/toy-item';
import { Lodaer } from '../../components/UI/loader';
import { Button } from '../../components/button';
import { ToyCover } from '../../components/toy-cover';
import './home-page.css';
import { Section } from '../../components/UI/section';




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
        <div className='main-main'>
            <Section />
            <div id = 'features' className='home-page'>
                {isToysLoading
                ? <Lodaer/>
                :toys &&
                    toys.map(toy => 
                            <div className='home-page__toys' key={toy.id} onClick={() => setModalActive(true)}>
                                <ToyItem toy={toy}/> 
                            </div>
                        )
                    } 
                <Modal active={modalActive} setActive={setModalActive}/>
            </div>
        </div>
    );
};
