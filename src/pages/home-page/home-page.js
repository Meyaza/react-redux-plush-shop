import React, { useEffect, useState } from 'react';
import { Modal } from '../../components/modal';
import { ToyItem } from '../../components/toy-item';
import axios from 'axios'
import './home-page.css';
import {Lodaer} from '../../components/UI/lodaer';
import { Button } from '../../components/button';
import { ToyCover } from '../../components/toy-cover';

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
        <section class="section_1" id="about">
            <div class="s_block">
                <div class='s_img'>
                <div className='ima'>
                    <ToyCover image={"/image-toys-slider/olen/olen1.jpg"}/>
                </div>
                </div>
                <div class="s_text">
                    <h2>
                         Вязание игрушек-это моё хобби результатом которого с удовольствием готова делиться с Вами
                    </h2>
                    <p>
                    К цене прошу отнестись с пониманием, т.к. она напрямую зависит от цен на пряжу и другие необходимые материалы, а так же от моих человеческих ресурсов, затраченных на создание этих малышей
                    </p>
                    <div className='but'>
                    <a href="#features">
                        <Button
                        type={'primary'}>
                            Заказать игрушку
                        </Button>
                    </a>
                    </div>
                </div>
            </div>
        </section>
  
        <div id = 'features' className='home-page'>
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
        </div>
    );
};
