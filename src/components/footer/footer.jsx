import React from 'react';
import { GrInstagram } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';

import './footer.css';

const Footer = () => {
    return (
        <div className="footer_container">
            <footer id="help">
                <div className="contact">
                    <div className="block">
                        <h2>Plush Toy Store</h2>
                    </div>
                    <p className="p_2">
                        meyaza@mail.ru<br/>
                        +1 234 5678901 (Main)
                    </p>
                </div>
                <div className="social">
                    <h2>Social Media</h2>
                    <div className="flex">
                    <a className='icon' href="https://vk.com/tanyasit"> 
                        <GrInstagram size={45}/>
                    </a>
                    <a className='icon' href="https://github.com/Meyaza"> 
                        <GoMarkGithub size={45}/>
                    </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;