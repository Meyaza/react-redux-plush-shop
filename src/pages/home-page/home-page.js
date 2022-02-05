import React, { useState } from 'react';
import { Modal } from '../../components/modal';
import { ToyItem } from '../../components/toy-item';


import './home-page.css';


const TOYS = [
    {
        id: 1,
        images: ['/image-toys-slider/cipa/cipa.jpg', '/image-toys-slider/cipa/cipa1.jpg'],
        title: 'Цыпленок в скорлупе',
        size: 'Игрушка размером с раскрытую ладонь',
        price: 700,
        description: "💛💛💛 БЕСКОНЕЧНО МИМИМИЛЫЙ Цыпленок💛💛💛 Такой невинный маленький ребёночек🐥.",
    },
    {
        id: 2,
        images: ['/image-toys-slider/dino/dino.jpg', '/image-toys-slider/dino/dino1.jpg'],
        title: 'Динозаврик',
        size: 'Длина игрушки около 36 см',
        price: 1000,
        description: "Очень милый спящий Динозаврик😴🤗😍такой притягательный, что точно не хочется отпускать его из рук🤭",
    },
    {
        id: 3,
        images: ['/image-toys-slider/edino/edino.jpg', '/image-toys-slider/edino/edino1.jpg', '/image-toys-slider/edino/edino2.jpg'],
        title: 'Единорожка',
        size: 'Ростом игрушка около 30 см',
        price: 1400,
        description: "Сказочный плюшевый Единорожка для Вас и ваших деток! 🦄🦄🦄Единорог - – это создание света, несущее добро, призванное противостоять темным силам😇 любимое сказочное существо всех малышей. Очень нежный, мягкий и приятный на ощупь!",
    },
    {
        id: 4,
        images: ['/image-toys-slider/hrusha/hrusha.jpg'],
        title: ['Пижамница Хрюша'],
        size: 'Размером хрюшка около 45 см',
        price: 1600,
        description: " Нежнейшая игрушка. Мешочек для хранения пижамы (тело у неё пустое, туда можно положить любые вещички. Закрывается затягиванинм резинки). Подушка-обнимашка для сна!🤗",
    },
    {
        id: 5,
        images: ['/image-toys-slider/koshka/koshka.jpg', '/image-toys-slider/koshka/koshka1.jpg'],
        title: 'Кошечка в платье',
        size: 'Рост её около 33 см',
        price: 1000,
        description: "Нежная Кошечка в платье быстро завоевала сердца многих💘 ",
    },
    {
        id: 6,
        images: ['/image-toys-slider/lev/lev.jpg', '/image-toys-slider/lev/lev1.jpg'],
        title: 'Лев Кудряш',
        size: 'Рост львенка около 36 см',
        price: 1300,
        description: "Царь зверей - Лев Кудряш 👑🦁👑 Нереально притягательный... 🤤 Ох уж эти милые кудряшки💘не оставляют равнодушным никого 💕 ",
    },
    {
        id: 7,
        images: ['/image-toys-slider/misha/misha.jpg', '/image-toys-slider/misha/misha1.jpg'],
        title: 'Плюшевый Мишка',
        size: 'Этот малыш ростом около 29 см',
        price: 1000,
        description: "Плюшевый Мишка для Вас и ваших деток! Детская игрушка👶 или романтический подарок💏— милый игрушечный медведь всегда будет желанным подарком для многих. Мягкий и приятный на ощупь!.",
    },
    {
        id: 8,
        images: ['/image-toys-slider/mishka/mishka.jpg'],
        title: 'Мишка Малыш',
        size: 'Рост малыша около 15см',
        price: 600,
        description: "🐻Маленький плюшевый Мишка, который помещается в ладошки! 🤗🙌 , может нести в себе большую ценность! Станет приятным дополнением к основному подарку или признанию💗",
    },
    {
        id: 9,
        images: ['/image-toys-slider/olen/olen.jpg', '/image-toys-slider/olen/olen1.jpg'],
        title: 'Пижамница Оленёнок',
        size: 'Размер от кончиков рожек до кончиков ножек 56 см',
        price: 1800,
        description: "😍Милейшая пижамница😍 Спящий оленёнок 🙏 В наличии и ищет себе дом и заботливых хозяев🏡 ПИЖАМНИЦА - это 3в1❗ Мягкая игрушка + мешочек для хранения пижамы + подушка-обнимашка🙏",
    },
    {
        id: 10,
        images: ['/image-toys-slider/plusha/plusha.jpg', '/image-toys-slider/plusha/plusha1.jpg'],
        title: 'Хрюшка Плюшка',
        size: 'Рост её около 37 см',
        price: 1300,
        description: "Мягкая и нежная Хрюшка - символ 2019 года! Своим обладателям приносит удачу и счастье🙏😉",
    },
    {
        id: 11,
        images: ['/image-toys-slider/polar/polar.jpg'],
        title: 'Полярный Мишка',
        size: 'Мишка ростом около 30 см!',
        price: 950,
        description: "Плюшевый малыш Мишка для Вас и ваших деток! Очень ласковый, будто из мультика про Умку... Обняв его, больше не захочется с ним расставаться!",
    },
    {
        id: 12,
        images: ['/image-toys-slider/sonya/sonya.jpg', '/image-toys-slider/sonya/sonya1.jpg', '/image-toys-slider/sonya/sonya2.jpg'],
        title: 'Собачка Соня',
        size: 'Игрушка ростом около 35 см',
        price: 1400,
        description: "Мягкая плюшевая Собачка Соня для Вас и ваших деток! Собака лучший друг человека и эта плюшевая малышка не исключение)",
    },
 
  

]


export const HomePage = () => {
    const [modalActive, setModalActive] = useState(false);
     
    return (
        <div className='home-page'>
           {TOYS.map(toy => 
            <div>
                <div onClick={() => setModalActive(true)}>
                <ToyItem toy={toy} key={toy.id} /> 
                </div>
                
            </div>
                )
            }
           <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
};
