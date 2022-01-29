import React, { useState } from 'react'
import './Header.css'

function Header( props ) {
    if(document.location.protocol !== 'https:'){
        //window.location.href = "https://francisliving.mx";
    }

    var color = '';
    if(props.color === 'White'){
        color = 'White';
    }

    const [toggle, setToggle] = useState('');
    const toggleMenu = () => {
        if(toggle === ''){
            setToggle('opened');
        }else{
            setToggle('');
        }
    }

    if(props.class === 'hide-logo'){
        return (
            <div className="header">
                <a href="/" className="header-logo-wrapper">
                    <img src={ "/images/francis-logo" + color + ".png" } width="190px" className="header-logo hidden" alt="logo"/>
                </a>
                <div className="header-icon" onClick={toggleMenu}>
                    <img src={ "/images/menu-icon" + color + ".png" } alt="menu" />
                </div>
                <div className={ "header-menu " + toggle + " " } onClick={ toggleMenu }>
                    <div className="header-menu-inner">
                        <a href='/nosotros' className="header-link">Quienes somos</a>
                        <a href="/ubicaciones" className="header-link">Ubicaciones</a>
                        <a href='/vive-en-francis' className="header-link">Vive en francis</a>
                        <a href='/contacto' className="header-link">Contacto</a>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className={ color + " header"}>
                <a href="/" className="header-logo-wrapper">
                    <img src={ "/images/francis-logo" + color + ".png" } width="190px" className="header-logo" alt="logo"/>
                </a>
                <div className="header-icon" onClick={toggleMenu}>
                    <img src={ "/images/menu-icon" + color + ".png" } alt="menu" />
                </div>
                <div className={ "header-menu " + toggle + " " } onClick={ toggleMenu }>
                    <div className="header-menu-inner">
                        <a href='/nosotros' className="header-link">Quienes somos</a>
                        <a href="/ubicaciones" className="header-link">Ubicaciones</a>
                        <a href='/vive-en-francis' className="header-link">Vive en francis</a>
                        <a href='/contacto' className="header-link">Contacto</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
