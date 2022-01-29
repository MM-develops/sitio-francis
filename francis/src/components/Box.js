import React, { useRef } from 'react'
import useIntersection from './useIntersection'
import './Box.css'

function Box( props ) {
    const ref = useRef();
    const inViewport = useIntersection(ref, '-10px');

    var trigger = '';
    if(inViewport){
        trigger = 'visible';
    }

    return (
        <>
            <div className={ "box " + props.class + ' ' +  props.pos + " " + trigger} ref={ ref }>
                { props.children }
                <div className="vertical-line"></div>
                <svg className="left-border" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 126.8 620.3">
                    <path d="M45.3,0c0,24.2-19.6,43.8-43.8,43.8v313"/>
                </svg>
                <svg className="right-border" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 126.8 620.3">
                    <path d="M45.3,0c0,24.2-19.6,43.8-43.8,43.8v313"/>
                </svg>
            </div>
        </>
    )
}

export default Box
