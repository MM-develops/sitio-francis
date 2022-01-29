import React, { useState } from 'react'
import './Footer.css'

function Footer() {
    const [visible, setVisibility] = useState('');
    const showButton = () => {
            setVisibility("visible");
    }
    
    return (
        <footer>
            <div className="footer-brand">
                <h4>LA BELLEZA QUE SE HABITA</h4>
                <img src="/images/francis-logoWhite.png" width="190px" className="footer-logo" alt="logo"/>
                <div className="social-links">
                    <a href className="social-link">
                        <img src="/images/francis-facebook.png" width="40px" alt="facebook"/>
                    </a>
                    <a href className="social-link">
                        <img src="/images/francis-instagram.png" width="40px" alt="instagram"/>
                    </a>
                    <a href className="social-link">
                        <img src="/images/francis-medium.png" width="40px" alt="medium"/>
                    </a>
                </div>
            </div>
            <div className="footer-menu">
                <ul>
                    <li>
                        <a href="/nosotros">Quienes somos</a>
                    </li>
                    <li>
                        <a href="/ubicaciones">Ubicaciones</a>
                    </li>
                    <li>
                        <a href="/vive-en-francis">Vive en francis</a>   
                    </li>
                    <li>
                        <a href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
            <div className="footer-newsletter">
                <p>Suscribete a nuestro newsletter</p>
                <form>
                    <input type="email" onClick={ showButton }/>
                    <button type="submit" className={ visible }>&#62;</button>
                </form>
                <div className="contact-information">
                    <a href="https://walden.com.mx">
                        <img src="/images/walden-logo-white.png" width="130px" alt="walden"/>
                    </a>
                    <div className="right-text">661 634 1321<br/>vive@francis.mx<br/>Tijuana, BC</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
