import React, { useRef } from 'react'
import useIntersection from './useIntersection'

export default function Ripple( props ) {
    const ref = useRef();
    const ref2 = useRef();
    const inViewport = useIntersection(ref, '-10px');
    const inViewport2 = useIntersection(ref2, '-10px');

    var trigger1 = '';
    if(inViewport){
        trigger1 = 'visible';
    }

    var trigger2 = '';
    if(inViewport2){
        trigger2 = 'visible';
    }

    return (
        <p className={"ripple " + props.class + " " + trigger1 } ref={ ref }>
            { props.content === undefined ? '' : props.content }
            <div className="ripple-inner-1"></div>
            <div className={ "ripple-inner-2 " + trigger2 } ref={ ref2 }></div>
        </p>
    )
}