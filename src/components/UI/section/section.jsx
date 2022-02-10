import React from 'react';
import { Button } from '../../button';
import { ToyCover } from '../../toy-cover';

export const Section = () => {
    return (
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
    );
};

