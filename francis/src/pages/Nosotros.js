import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Frame from '../components/Frame'
import Line from '../components/Line'
import Banner from '../components/Banner'
import { Helmet } from 'react-helmet'

function Nosotros() {
    return (
        <>
            <Helmet>
                <title>Francis | Nosotros</title>
            </Helmet>
            <img src="images/garabato-6.png" alt="" className="squiggle-13"/>
            <Header />
            <Hero title="QUIÉNES SOMOS" background="fondo-2.jpg" class="graphic-1" />
            <div className="khaki">
                <Frame type="corner" class="center-text" >
                    <img className="squiggle-3" alt="" src="images/garabato-1.png"/>
                    <h2>WALDEN</h2>
                    <p className="">Walden es concebido como una empresa dinámica conformada por personas especializadas en distintas disciplinas con el fin de crear proyectos inmobiliarios con la más alta calidad en diseño y construcción. Creemos, como Thoreau, en una vida simple, eso es lo que los espacios que creamos reflejan, espacios para ser vividos. Construimos pensando en cómo optimizar los materiales, a través del buen diseño, para poderte ofrecer la mejor calidad de vida.</p>
                    <p>Nuestra misión es invertir capital económico e intelectual en donde solucionas creativas e innovadoras de diseño puedan mejorar la calidad de vida de nuestros residentes y nuestros entornos. Creando valor  para nuestros residentes, inversionistas y comunidad.</p>
                </Frame>
                <Frame type="full">
                    <h2 className="center-text">INVERSIÓN</h2>
                    <img className="squiggle-4" alt="" src="images/garabato-3.png"/>
                    <p>Impulsamos la creación de valor para nuestros inversionistas. Nos diferenciamos por ser un administrador y desarrollador único y verticalmente integrado, con la capacidad para coordinar y ejecutar cada paso de la cadena de valor en el desarrollo de proyectos de inversión, permitiéndonos lograr niveles excepcionales de retorno</p>
                    <p>Utilizando nuestro profundo expertise en fundamentos de mercado, tendencias globales, diseño premiado a nivel internacional y excelencia en construcción, nuestros proyectos exceden expectativas y marcan nuevos estándares.</p>
                    <p>Nos enfocamos en inmuebles residenciales e inversiones comerciales que exceden las expectativas de mercado y son detonadores de valor. Nuestra tesis de inversión se basa en buscar oportunidades que generan altos retornos de inversión y una gran resiliencia a través de los ciclos económico.</p>
                    <p>Gestión profesional y unificada de todo el edificio permite:</p>
                    <ul>
                        <li>Maximizar el precio de renta</li>
                        <li>Evitar la competencia interna</li>
                        <li>Optimizar el mix entre larga y corta estancia en el edificio</li>
                        <li>Menor riesgo para los propietarios de las unidades al recibir el  beneficio proporcional de todas las unidades (pool de rentas)</li>
                        <li>Mejor servicio a los usuarios se traduce en rentas más altas y  menor desocupación</li>
                    </ul>
                </Frame>
                <div className="row v-center">
                    <img src="images/garabato-4.png" alt="" className="squiggle-5"/>
                    <div className="half lined-row">
                        <h2>LA VIVIENDA EN RENTA</h2>
                        <Line class="full"/>
                    </div>
                    <div className="half lined-row">
                        <p>La tendencia global de la transición de usuarios cuya prioridad era la adquisición de una vivienda a la vivienda en renta, gracias a estilos de vida más flexibles, cambios de prioridades en inversiones nos ha llevado a la creación de un producto de vivienda en renta institucional único en la ciudad de Tijuana.</p>
                        <p>La vivienda en renta a nivel institucional tiene un largo historial de generar flujos estables y rendimientos superiores, de manera que transformamos metros cuadrados en la vivienda que nuestros usuarios desean. Estamos creando un nuevo instrumento de inversión que supera las inversiones tradicionales en bienes raíces por un grado de magnitud.</p>
                        <Line class="top full right" />
                        <Line class="vertical">
                            <svg xmlns="https://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 375.5 1920">
                                <path xmlns="https://www.w3.org/2000/svg" d="M96,1883.5c0-126.5,0-253,0-379.5c0-240,0-480,0-719.9c0-41.2,0-82.3,0-123.5c0-47.6-4.7-100.1,4-146.6  c4.5-24.4,16.5-48.4,37-62.3c9.5-6.4,20.8-10.7,27.7-19.8c13.9-18.1,4.3-45.8,15.7-65.6c18.7-6.8,26.8,31,46.7,31.1  c13.6,0.1,19.7-16.8,21.3-30.3c13.1-110.9-14-229.7,32.8-331.1"/>
                            </svg>
                        </Line>
                    </div>
                </div>
                <div className="lined-row mt50 mb50">
                    <Line />
                </div>
                <div className="row v-center">
                    <div className="half lined-row">
                        <div className="lined-row">
                            <h2>PROPERTY MANAGER</h2>
                            { /*<Line class="full"/>*/ }
                        </div>
                        <p>La tendencia global de la transición de usuarios cuya prioridad era la adquisición de una vivienda a la vivienda en renta, gracias a estilos de vida más flexibles, cambios de prioridades en inversiones nos ha llevado a la creación de un producto de vivienda en renta institucional único en la ciudad de Tijuana.</p>
                        <p className="lined-row">La vivienda en renta a nivel institucional tiene un largo historial de generar flujos estables y rendimientos superiores, de manera que transformamos metros cuadrados en la vivienda que nuestros usuarios desean. Estamos creando un nuevo instrumento de inversión que supera las inversiones tradicionales en bienes raíces por un grado de magnitud.
                        </p>
                        <Line class="full bottom"/>
                        <Line class="vertical right v-flip">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 375.5 1920">
                                <path xmlns="https://www.w3.org/2000/svg" d="M96,1883.5c0-126.5,0-253,0-379.5c0-240,0-480,0-719.9c0-41.2,0-82.3,0-123.5c0-47.6-4.7-100.1,4-146.6  c4.5-24.4,16.5-48.4,37-62.3c9.5-6.4,20.8-10.7,27.7-19.8c13.9-18.1,4.3-45.8,15.7-65.6c18.7-6.8,26.8,31,46.7,31.1  c13.6,0.1,19.7-16.8,21.3-30.3c13.1-110.9-14-229.7,32.8-331.1"/>
                            </svg>
                        </Line>
                    </div>
                    <div className="half center-text">
                        <img src="images/garabato-2.png" alt="" width="250px"/>
                    </div>
                </div>
            </div>
            <div className="image-background" style={ { backgroundImage: 'url(images/fondo-3.jpg)' } }></div>
            <Banner color="khaki"/>
        </>
    )
}

export default Nosotros
