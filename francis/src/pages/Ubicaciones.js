import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Box from '../components/Box'
import Banner from '../components/Banner'
import { Helmet } from 'react-helmet'

function Ubicaciones() {
    return (
        <>
        <Helmet>
            <title>Francis | Ubicaciones</title>
        </Helmet>
        <img src="images/garabato-6.png" alt="" className="squiggle-14"/>
        <img src="images/garabato-7.png" alt="" className="squiggle-15"/>
        <Header />
        <Hero title="UBICACIONES" background="fondo-4.jpg" class="graphic-2 White"/> 
        <div className="brown White">
            <Box pos="top"/>
            <a href="/calete" className="row v-center">
                <div className="third">
                    <img src="images/ilustracion-2.png" alt="" />
                </div>
                <div className="two-thirds">
                    <h2>FRANCIS CALETE</h2>
                </div>
            </a>
            <a href="/rio" className="row v-center">
                <div className="third">
                </div>
                <div className="two-thirds">
                    <h2>FRANCIS RÍO</h2>
                </div>
            </a>
            <Box pos="bottom" />
            <Banner color="brown"/>
        </div>
        </>
    )
}

export default Ubicaciones
