import React, { useRef } from 'react'
import './Hero.css'
import Line from './Line'
import useIntersection from './useIntersection'

function Hero( props ) {
    const ref = useRef();
    const inViewport = useIntersection(ref, '-10px');

    var trigger = '';
    if(inViewport){
        trigger = 'visible';
    }

    return (
        <>
            <div className={ trigger + " row flex-center v-center lined-row image-background " + props.class } ref={ ref } style={ { backgroundImage: 'url(images/' + props.background + ')' } }>
                <h1 className="main">{ props.title }</h1>
                <Line />
                <div className="center-graphic"></div>
                <Line class="bottom"/>
            </div>
        </>
    )
}

export default Hero
