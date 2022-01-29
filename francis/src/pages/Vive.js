import React from 'react'
import Header from "../components/Header";
import Hero from '../components/Hero'
import Box from '../components/Box'
import ContactForm from '../components/ContactForm'
import Banner from '../components/Banner'
import { Helmet } from 'react-helmet';

function Vive() {
    return (
        <>
        <Helmet>
            <title>Francis | Vive en francis</title>
        </Helmet>
        <img src="images/garabato-6.png" alt="" className="squiggle-14"/>
        <img src="images/garabato-7.png" alt="" className="squiggle-15"/>
            <Header />
            <Hero title="VIVE EN FRANCIS" background="fondo-7.jpg" class="graphic-3 White"/>
            <div className="green White">
                <div className="row center-text pt100">
                    <img src="images/garabato-4.png" alt="" className="squiggle-10"/>
                    <p>Los residentes de Francis cuentan con un nivel de lujo y servicio que no existe en el mercado de departamentos en renta. </p>
                    <p>Vivir en Francis te conecta a la ciudad y a un nuevo estilo de vida de una manera contemporánea, combinando diseño de alto nivel con avances tecnológicos así como ubicaciones en barrios dinámicos que te harán descubrir una nueva forma de vida todos los días.</p>
                </div>
                { /*<Box class="center-text" pos="top">
                        <h2>FRANCIS CALETE</h2>
                </Box>*/ }
                { /*<div className="row center-text">
                    <div className="full">
                        <p>Desde su lobby donde te recibe un concierge, el lounge exterior con doble altura donde podrás cocinar para tus invitados, pasando por el salón triple altura donde puedes organizar cenas, eventos o trabajar, hasta el elegante bar en el rooftop que cuenta con espacios interiores y exteriores, Francis Mérida eleva el vivir en Tijuana al nivel más alto</p>              
                    </div>
            </div>*/ }

                <div className="row flex-center">
                    <div className="two-thirds">
                        <img src="images/ilustracion-2.png" alt="" />
                    </div>
                </div>
                <Box class="v-center flex-column center-text" pos="bottom">
                    <h3>Si te interesa conocer más sobre Francis Calete</h3>
                    <ContactForm id="calete" class="outline"/>
                    <p className="btn">DISPONIBILIDAD</p>
                    <img src="images/garabato-2.png" alt="" className="squiggle-11"/>
                </Box>
                <div className="image-background image-background-1" style={ { backgroundImage: 'url(images/fondo-10.jpg)' } }></div>
                <Banner />
            </div>
        </>
    )
}

export default Vive
