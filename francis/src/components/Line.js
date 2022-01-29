import React, { useRef } from 'react'
import useIntersection from './useIntersection'
import './Line.css'

export default function Line( props ) {
    const ref = useRef();
    const inViewport = useIntersection(ref, '-10px');

    var trigger = '';
    if(inViewport){
        trigger = 'visible';
    }

    return <div className={"line " + props.class + " " + trigger } ref={ ref }>{ props.children }</div>
}



/*class Line extends Component {

    /*componentDidMount() {
        document.addEventListener("scroll", this.isInViewport);
      }
    
      //do not forget to remove it after destroyed
      componentWillUnmount() {
        document.removeEventListener("scroll", this.isInViewport);
      }
    
      isInViewport = () => {
        const top = this.viewElement.getBoundingClientRect().top;

        this.props.setElementStatus(top <= 0);
        //console.log(this);
    };
    render(){
        return <div className="line"></div>
    }
}

export default Line*/
