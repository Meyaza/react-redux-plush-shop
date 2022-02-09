import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from '../../components/modal';
import { ToyItem } from '../../components/toy-item';
import { Lodaer } from '../../components/UI/loader';
import { Button } from '../../components/button';
import { ToyCover } from '../../components/toy-cover';
import './home-page.css';




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
            <section className="section_1" id="about">
                <div className="s_block">
                    <div className='s_img'>
                        <div className='ima'>
                            <ToyCover image={"/image-toys-slider/olen/olen1.jpg"}/>
                        </div>
                    </div>
                    <div className="s_text">
                        <h2>
                            Вязание игрушек-это моё хобби результатом которого с удовольствием готова делиться с Вами
                        </h2>
                        <p>
                        К цене прошу отнестись с пониманием, т.к. она напрямую зависит от цен на пряжу и другие необходимые материалы, а так же от моих человеческих ресурсов, затраченных на создание этих малышей
                        </p>
                        <div className='but'>
                            <a href="#features">
                                <Button
                                    type={'primary'}
                                >
                                    Заказать игрушку
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
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
