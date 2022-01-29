import React from 'react'
import Header from "../components/Header";
import Line from '../components/Line'
import ContactForm from '../components/ContactForm'
import { Helmet } from 'react-helmet';

function Contacto() {
    return (
        <>
        <Helmet>
          <title>Francis | Contacto</title>
        </Helmet>
        <Header color="White"/>
          <div className="black White">
              <div className="row lined-row contact-hero flex-center v-align">
                  <h1>CONTACTO</h1>
                  <Line>
                    <div className="graphic-4"></div>
                  </Line>
              </div>
              <div className="row center-text flex-center">
                <p className="large">Para más información sobre nuestros<br />proyectos en desarrollo</p>
              </div>
              <div className="row flex-center">
                <ContactForm id="contact" /> 
              </div>
              <div className="row lined-row mt50">
                  <Line />
              </div>
              <div className="row flex-around">
                  <div className="third">
                      <p className="large mt0">Contactanos</p>
                      <p>664 634 1341<br />hola@francis.com</p>
                  </div>
                  <div className="third">
                  <p className="large mt0">Vive en Francis Calete</p>
                  </div>
              </div>
          </div>
        </>
    )
}

export default Contacto
