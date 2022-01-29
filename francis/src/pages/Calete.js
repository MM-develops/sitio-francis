import React from 'react'
import Header from '../components/Header'
import Frame from '../components/Frame'
import Box from '../components/Box'
import Line from '../components/Line'
import Banner from '../components/Banner'
import { Helmet } from 'react-helmet'
import ReactImageFallback from 'react-image-fallback'

function Calete() {

    return (
        <>
        <Helmet>
            <title>Francis | Calete</title>
        </Helmet>
        <img src="images/garabato-6.png" alt="" className="squiggle-16"/>
        <img src="images/garabato-7.png" alt="" className="squiggle-17"/>
        <Header />
          { /*<Hero title="PROYECTOS" background="fondo-5.png" class="graphic-1 White"/>*/  }
          <div className="light-brown White">
              <Frame class="center-text" type="corner">
                <h2>FRANCIS CALETE</h2>
                <h3>Tijuana</h3>
                <p className="">Desde su lobby donde te recibe un concierge, el lounge exterior con doble altura donde podrás cocinar para tus invitados, pasando por el salón triple altura donde puedes organizar cenas, eventos o trabajar, hasta el elegante bar en el rooftop que cuenta con espacios interiores y exteriores, Francis Mérida eleva el vivir en Tijuana al nivel más alto.</p>
              </Frame>
            <div className="image-background" style={ { backgroundImage: 'url(/images/fondo-10.jpg)' } }>
                <img src="/images/garabato-3.png" alt="" className="squiggle-6"/>
                <img src="/images/garabato-2.png" alt="" className="squiggle-7"/>
            </div> 
            <div className="row flex-center dotted">
                <div className="two-thirds">
                    <img src="/images/ilustracion-2.png" alt="Ilustracion" />
                </div>
            </div>
            <Box class="flex-center center-text lined-row" pos="top">
                <h2>DESCUBRE FRANCIS CALETE</h2>
            </Box>
            <div className="row center-text v-center m-switch">
                <div className="half lined-row">
                    <Line />
                </div>
                <div className="half">
                    <h3>2 Recámaras</h3>
                    <p>2 Baños, Cocina, Comedor y sala 80 m2 Interior</p>
                    <img className="mw180 rotate" src="/images/Planta_A.png" alt=""/>
                </div>
            </div>
            <div className="row center-text m-230">
                <div className="half">
                    <h3>1.5 Recámaras</h3>
                    <p>Espacio Multiusos, Sala, Comedor y Cocina 55 m2 Interior</p>
                    <img className="mw180" src="/images/Planta_B.png" alt=""/>
                </div>
                <div className="half lined-row">
                    <Line class="right" />
                </div>
            </div>
            <div className="row center-text m-switch">
                <div className="half lined-row">
                    <Line />
                </div>
                <div className="half">
                    { /*<div className="light-circle">*/ }
                        <h3>Estudio</h3>
                        <p>1 Recámara, 1 Baño, Cocina, Sala-Comedor 35 m2 Interior</p>
                        <img className="mw180" src="/images/Planta_C.png" alt=""/>
                    { /*</div>*/ }
                </div>
            </div>
            <div className="row">
            <iframe className="tour3D" title="recorrido3D" src="https://renderings.madelongroup.com/meridad1/"></iframe>
            </div>
            <div className="row v-center pt100 pb100">
                <div className="half lined-row center-text">
                    <h2>AMENIDADES</h2>
                    <Line />
                    <img src="/images/garabato-4.png" alt="" className="squiggle-8"/>
                </div>
                <div className="half flex lined-row m-pb0">
                    <figure className="half">
                        <img src="/images/lobby.png" alt="icono de lobby" width="90px"/>
                        <figcaption>Lobby en doble altura con doorman y concierge.</figcaption>
                    </figure>
                    <figure className="half">
                        <img src="/images/lounge.png" alt="icono de lounge" width="90px"/>
                        <figcaption>Lounge exterior techado con doble altura con asador y área de mesas.</figcaption>
                    </figure>
                    <figure className="half">
                        <img src="/images/salon.png" alt="icono de salon" width="90px"/>
                        <figcaption>Salón en triple altura con sala y comedor que incluye mezzanines diseñados para que puedas trabajar en tu computadora.</figcaption>
                    </figure>
                    <figure className="half">
                        <img src="/images/rooftop.png" alt="icono de rooftop" width="90px"/>
                        <figcaption>Rooftop con área de gimnasio, bar interior y mesas en exterior.</figcaption>
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
                        <img src="/images/wifi.png" alt="icono de wifi" width="90px"/>
                        <figcaption>Wifi en áreas comunes.</figcaption>
                    </figure>
                    <figure className="third">
                        <img src="/images/concierge.png" alt="icono de concierge" width="90px"/>
                        <figcaption>Doorman y concierge.</figcaption>
                    </figure>
                    <figure className="third">
                        <img src="/images/seguridad.png" alt="icono de seguridad" width="90px"/>
                        <figcaption>Seguridad 24 horas.</figcaption>
                    </figure>
                    <figure className="third">
                        <img src="/images/valet.png" alt="icono de valet" width="90px"/>
                        <figcaption>Valet parking.</figcaption>
                    </figure>
                    <figure className="third">
                        <img src="/images/community.png" alt="icono de community manager" width="90px"/>
                        <figcaption>Community manager.</figcaption>
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
            <div className="center-text">
                <h2>UBICACIÓN</h2>
            </div>
            <div className="">
                <ReactImageFallback
                src="/images/mapa_calete.webp"
                fallbackImage="/images/mapa_calete.jpg"
                alt="mapa de ubicación de francis calete"
                className="map" 
                width="100%"/>
            </div>
            <Box class="center-text light-brown" pos="bottom">
                <img src="/images/garabato-2.png" alt="" className="squiggle-9"/>
                <h2>DISEÑO</h2>
                <p>A solo unos pasos de Paseo Chapultepec, plaza que cuenta con algunos de los mejores restaurantes de Tijuana, Francis Calete se encuentra en la colonia Neidhart, una de las mejores ubicadas de la ciudad. Colindando con la colonia Chapultepec y la colonia Cacho, estás a unos cuántos minutos de todos los servicios que puedas necesitar, desde hoteles hasta restaurantes y bares. Nuestra ubicación es una de las pocas en la ciudad en donde puedes tomar una de las bicicletas de Francis y fácilmente ir al cine o a un café.</p>
                <a class="btn" href="###">VIVE EN FRANCIS CALETE</a>
            </Box>
            <Banner color="light-brown"/>
          </div>
        </>
    )
}

export default Calete
