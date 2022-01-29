import React from 'react'
import Header from '../components/Header'
import Frame from '../components/Frame'
import Box from '../components/Box'
import Line from '../components/Line'
import Banner from '../components/Banner'
import { Helmet } from 'react-helmet'
import ReactImageFallback from 'react-image-fallback'

function Rio() {
    return (
        <>
        <Helmet>
            <title>Francis | Rio</title>
        </Helmet>
        <img src="images/garabato-6.png" alt="" className="squiggle-16"/>
        <img src="images/garabato-7.png" alt="" className="squiggle-17"/>
        <Header />
        <div className="light-brown White">
          <Frame class="center-text" type="corner">
                <h2>FRANCIS RIO</h2>
                <h3>Tijuana</h3>
                <p className="">En 5 minutos caminando te encuentras en la ciudad de San Diego. Esta es la ubicación ideal para cualquier persona que trabaja en San Diego pero quiere pagar renta en Tijuana. Con una gran cantidad de restaurantes y bares a un par de minutos caminando, Francis Río está diseñado para ofrecerte la mejor calidad de espacio a precios accesibles.</p>
            </Frame>
            <div className="image-background image-background-7" style={ { backgroundImage: 'url(/images/fondo-13.jpg)' } }>
                <img src="/images/garabato-3.png" alt="" className="squiggle-6"/>
                <img src="/images/garabato-2.png" alt="" className="squiggle-7"/>
            </div> 
            <div className="row flex-center dotted">
                <div className="two-thirds">
                    <img src="/images/ilustracion-2.png" alt="Ilustracion" />
                </div>
            </div>
            <Box class="flex-center center-text lined-row" pos="top">
                <h2>DESCUBRE FRANCIS RIO</h2>
            </Box>
            <div className="row center-text v-center m-switch">
                <div className="half lined-row">
                    <Line />
                </div>
                <div className="half">
                    <h3>LOFT</h3>
                    <p>Planta baja: sala, comedor, cocina, baño. Planta Superior: Recámara.</p>
                    <img className="mw180 rotate" src="/images/francis-loft.png" alt=""/>
                </div>
            </div>
            <div className="row center-text mt--230">
                <div className="half">
                    <h3>ESTUDIO</h3>
                    <p>Sala, comedor, cocina, 1 recámara,<br/>1 baño.</p>
                    <img className="mw180 rotate" src="/images/francis-estudio.png" alt=""/>
                </div>
                <div className="half lined-row">
                    <Line class="right" />
                </div>
            </div>
            <div className="image-background mt50 " style={ { backgroundImage: 'url(/images/rio-2.jpg)', backgroundPositionX: '46%'}}></div>
            <div className="row v-center pt100 pb100">
                <div className="half lined-row center-text">
                    <h2>AMENIDADES</h2>
                    <Line />
                    <img src="/images/garabato-4.png" alt="" className="squiggle-8"/>
                </div>
                <div className="half flex flex-center lined-row m-pb0">
                    <figure className="half">
                        <img src="/images/rooftop.png" alt="icono de rooftop" width="90px"/>
                        <figcaption>Rooftop con área de gimnasio, bar interior y mesas en exterior</figcaption>
                    </figure>
                    <Line class="right top" />
                    <Line class="vertical">
                        <svg xmlns="https://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 375.5 1920">
                            <path xmlns="https://www.w3.org/2000/svg" d="M96,1883.5c0-126.5,0-253,0-379.5c0-240,0-480,0-719.9c0-41.2,0-82.3,0-123.5c0-47.6-4.7-100.1,4-146.6  c4.5-24.4,16.5-48.4,37-62.3c9.5-6.4,20.8-10.7,27.7-19.8c13.9-18.1,4.3-45.8,15.7-65.6c18.7-6.8,26.8,31,46.7,31.1  c13.6,0.1,19.7-16.8,21.3-30.3c13.1-110.9-14-229.7,32.8-331.1"/>
                        </svg>
                    </Line>
                </div>
            </div>
            <div className="row v-center m-switch">
            <div className="half flex flex-center baseline lined-row">
                    <figure className="third">
                        <img src="/images/concierge.png" alt="icono de concierge" width="90px"/>
                        <figcaption>Doorman y concierge</figcaption>
                    </figure>
                    <figure className="third">
                        <img src="/images/seguridad.png" alt="icono de seguridad" width="90px"/>
                        <figcaption>Seguridad 24 horas</figcaption>
                    </figure>
                    <figure className="third">
                        <img src="/images/valet.png" alt="icono de valet" width="90px"/>
                        <figcaption>Valet parking</figcaption>
                    </figure>
                    <figure className="third">
                        <img src="/images/community.png" alt="icono de community manager" width="90px"/>
                        <figcaption>Community manager</figcaption>
                    </figure>
                    <figure className="third">
                        <img src="/images/wifi.png" alt="icono de wifi" width="90px"/>
                        <figcaption>Wifi en áreas comunes</figcaption>
                    </figure>
                    <Line  class="top"/>
                    <Line class="vertical left">
                        <svg xmlns="https://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 375.5 1920">
                            <path xmlns="https://www.w3.org/2000/svg" d="M96,1883.5c0-126.5,0-253,0-379.5c0-240,0-480,0-719.9c0-41.2,0-82.3,0-123.5c0-47.6-4.7-100.1,4-146.6  c4.5-24.4,16.5-48.4,37-62.3c9.5-6.4,20.8-10.7,27.7-19.8c13.9-18.1,4.3-45.8,15.7-65.6c18.7-6.8,26.8,31,46.7,31.1  c13.6,0.1,19.7-16.8,21.3-30.3c13.1-110.9-14-229.7,32.8-331.1"/>
                        </svg>
                    </Line>
                </div>
                <div className="half lined-row center-text">
                    <h2>SERVICIOS</h2>
                    <Line class="right" />
                </div>
            </div>
            <div className="center-text mt50">
                <h2>UBICACIÓN</h2>
            </div>
            <div className="">
                <ReactImageFallback 
                src="/images/mapa_rio.webp" 
                fallbackImage="/images/mapa_rio.jpg" 
                className="map" 
                width="100%" 
                alt="mapa de ubicación de francis rio"/>
            </div>
            <Box class="center-text light-brown" pos="bottom">
                <img src="/images/garabato-2.png" alt="" className="squiggle-9"/>
                <h2>DISEÑO</h2>
                <p>A sus alrededores, encontrarás una gran diversidad de amenidades de las cuales podrás contemplar algunos de los centros culturales y comerciales más emblemáticos de la ciudad, tales como el Centro Cultural Tijuana,  Plaza Río, restaurantes con increíbles ofertas gastronómicas que no encontrarás en otras partes, cines, gimnasios, mercados de conveniencia, así como servicios, torres y centros médicos para mantener un excelente estilo de vida, a los cuales podrás llegar de forma fácil y rápida.</p>
                <p>Además, si eres de aquellos que goza de una dinámica binacional y cruzas constantemente, Francis Río se encuentra a no más de 5 minutos de la garita del cruce fronterizo con Estados Unidos. Esta cercanía te permitirá conectar con ambas ciudades de manera inigualable, facilitando tu dinámica de vida y aportando a tu comodidad en el día a día.</p>
                <a class="btn" href="###">VIVE EN FRANCIS CALETE</a>
            </Box> 
            <Banner color="light-brown"/> 
            </div>
        </>
    )
}

export default Rio
