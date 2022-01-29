import React, { useRef } from 'react'
import useIntersection from './useIntersection'
import './Frame.css'

function Frame( props ) {
    const refTop = useRef();
    const refBottom = useRef();

    const topInView = useIntersection(refTop, '-10px');
    const bottomInView = useIntersection(refBottom, '-10px');

    var triggerTop = '';
    var triggerBottom = '';

    if(topInView) triggerTop = 'visible';
    if(bottomInView) triggerBottom = 'visible';


    return (
        <>
            <div className={ "framed-row " + props.class + " " + props.type }>
                <div className={ "upper-frame " + triggerTop } ref={ refTop }></div>
                { props.type === "full" ? <>
                    <svg className={ "top-left-border " + triggerTop } xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 126.8 921.3">
                        <g>
                            <path d="M45.3,0c0,24.2-19.6,43.8-43.8,43.8v313"/>
                            <path class="st0" d="M1.6,43.9c0,59.7,0,119.3,0,179c0,125.7,0,163.4,0,289.2c0,80.4-3.2,161.5,1.3,241.8c0.6,10.1,1.4,20.4,6,29.4   c4.5,8.8,12.2,15.4,20.1,21.2c6.7,4.9,13.9,9.5,18.4,16.5c9.5,14.8,4,35,11.3,51c0.9,2.1,2.2,4.2,4.3,5.2c3,1.4,6.6,0.1,9.9,0.7   c5.5,1,8.4,7.1,9.1,12.7c0.6,5.5-0.2,11.3,1.7,16.5c2.8,7.7,10.8,12.4,18.9,13.6c8.1,1.1,16.2-0.6,24.2-2.4"/>
                        </g>
                    </svg>
                    <svg className={ "top-right-border " + triggerTop } xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 126.8 620.3">
                        <path d="M45.3,0c0,24.2-19.6,43.8-43.8,43.8v313"/>
                    </svg>
                </> : '' }
                { props.children }
                { props.type === "full" ? <>
                    <svg className={ "bottom-left-border " + triggerBottom } xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 126.8 620.3">
                        <path d="M45.3,0c0,24.2-19.6,43.8-43.8,43.8v313"/>
                    </svg>
                    <svg className={ "bottom-right-border " + triggerBottom } xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 126.8 921.3">
                        <g>
                            <path d="M45.3,0c0,24.2-19.6,43.8-43.8,43.8v313"/>
                            <path class="st0" d="M1.6,43.9c0,59.7,0,119.3,0,179c0,125.7,0,163.4,0,289.2c0,80.4-3.2,161.5,1.3,241.8c0.6,10.1,1.4,20.4,6,29.4   c4.5,8.8,12.2,15.4,20.1,21.2c6.7,4.9,13.9,9.5,18.4,16.5c9.5,14.8,4,35,11.3,51c0.9,2.1,2.2,4.2,4.3,5.2c3,1.4,6.6,0.1,9.9,0.7   c5.5,1,8.4,7.1,9.1,12.7c0.6,5.5-0.2,11.3,1.7,16.5c2.8,7.7,10.8,12.4,18.9,13.6c8.1,1.1,16.2-0.6,24.2-2.4"/>
                        </g>
                    </svg>
                </> : '' }
                <div className={ "lower-frame " + triggerBottom } ref={ refBottom }>

                    { props.type === "corner" ? <svg id="horizontal-curve" className="curve" x="0px" y="0px" viewBox="0 0 1435.2 182.7"><path xmlns="https://www.w3.org/2000/svg" d="M0,180.6c88.7,0,177.4,0,266.1,0c186.9,0,373.8,0,560.7,0c119.5,0,240.1,4.6,359.5-1.8c15-0.8,30.4-2,43.7-8.6  c13-6.5,22.9-17.6,31.6-29c7.3-9.7,14.2-20.1,24.5-26.5c21.9-13.7,52-5.7,75.8-16.2c3.1-1.4,6.2-3.2,7.7-6.2c2.1-4.4,0.1-9.6,1-14.3  c1.5-7.9,10.6-12.2,18.8-13.1c8.2-0.9,16.8,0.3,24.6-2.5c11.4-4,18.5-15.6,20.2-27.3c1.7-11.6-1-23.4-3.6-34.9"/>   </svg> : '' }
                </div>
            </div>   
        </>
    )
}

export default Frame

