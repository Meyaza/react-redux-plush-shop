import React from 'react';
import  {AiOutlineInstagram} from 'react-icons/ai';
import './footer.css'
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
                    +79991386577 (Main)
                </p>
                
            </div>

            <div className="social">
                <h2>Social Media</h2>
                <div className="flex">
                    <div className="s"></div>
                    <div className="s"></div>
                    <div className="s"></div>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;