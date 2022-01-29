import React from 'react'
import Header from '../components/Header'
import Line from '../components/Line'
import Ripple from '../components/Ripple'
import Banner from '../components/Banner'
import { Helmet } from 'react-helmet'
import ReactImageFallback from 'react-image-fallback'

function Home() {
    return (
        <div className="khaki-1">
            <Helmet>
                <title>Francis</title>         
            </Helmet>
            <Header class="hide-logo"/>
            <div className="video-background">
                <video preload="metadata" playsInline autoPlay loop muted>
                    <source src="videos/Francis-IntroWeb.mp4" type="video/mp4"/>
                </video>
            </div>
            { /*<div className="row lined-row">
                <div className="lined-square">
                    <div className="dark-image-circle">
                        <div className="dark-image-circle-container">
                            <img src="images/fondo-1.png" alt=""/>
                        </div>
                    </div>
                </div>
                <Line />
            </div>*/ }
            <div className="row lined-row flex-center">
                <h2 className="center-text">UNA NUEVA FORMA DE VIVIR</h2>
                <Line />
            </div>
            <div className="row lined-row center-text v-center">
                <img className="squiggle-1" alt="" src="images/garabato-1.png"/>
                <div className="third"></div>
                <div className="third h400">
                    <Ripple content="Francis es un nuevo concepto de vivienda. Desarrollo boutique de departamentos en renta. Nuestra misión es crear espacios y experiencias que ayuden a nuestros residentes a vivir de una mejor manera. Creemos en el poder del diseño y el impacto positivo que puede tener en cómo vivimos nuestros espacios, de una manera más feliz y más saludable." />
                </div>
                <Line class="m-top"/>
                <img className="squiggle-2" alt="" src="images/garabato-2.png"/>
            </div>
            <div className="row image-background White lined-row" style={ { backgroundImage: 'url(images/fondo-10.jpg)' } }>
                <div className="flex full m-switch">
                    <div className="third mb-2em" style={ { alignSelf: "flex-end" } }>
                        <h2>A CURATED EXPERIENCE</h2>
                    </div>
                    <div className="two-thirds right-text">
                        { /*<h2>LA BELLEZA</h2>
                        <h2>LA BELLEZA</h2>
                        <h2>LA BELLEZA</h2>*/ }
                    </div>
                </div>
                <Line class="bottom"/>
            </div>
            <div className="row lined-row pt100 pb100 mt40">
                <div className="half">
                    <h3>Your urban retreat</h3>
                    <p>Traveling like a local doesn't have to mean sacrificing the consistency of luxury travel apartments and get the personalized service you deserve.</p>
                </div>
                <div className="half">
                    <div  className="half-image">
                        <ReactImageFallback 
                        src="images/fondo-11.webp"
                        fallbackImage="images/fondo-11.png"
                        alt=""
                        />
                    </div>
                </div>
                <Line class="bottom p100"/>
            </div>
            <div className="row switch pt100 pb100 mb50">
                <div className="half">
                    <div className="half-image left">
                        <ReactImageFallback 
                        src="images/fondo-12.webp" 
                        fallbackImage="images/fondo-12.png"
                        alt=""/>
                    </div>
                </div>
                <div className="half">
                    <h3>Your extended stay</h3>
                    <p>Traveling like a local doesn't have to mean sacrificing the consistency of luxury travel apartments and get the personalized service you deserve.</p>
                </div>
                <div className="dark-circle">
                        <a href="/vive-en-francis" className="dark-circle-inner">
                            <h4 className="pb5">VIVE EN</h4>
                            <img src="/images/francis-logoWhite.png" alt="FRANCIS" width="95px"/>
                        </a>
                    </div>
                    <Line class="full right"/>
                    <Ripple class="absolute"/>
            </div>
            <div className="row image-background lined-row z0" style={ { backgroundImage: 'url(images/fondo-1.png)' } }>
                <div className="half">
                <p className="justify-text">“All painting is an accident. But it’s also not an accident, because one must select what part of the accident one chooses to preserve.”</p>
                <p className="right-text">- Francis Bacon</p>
                </div>
                <Line class="top" />

            </div>
            <Banner color="light-green"/>
        </div>
    )
}

export default Home
