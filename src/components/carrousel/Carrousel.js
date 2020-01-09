import React, { Component } from 'react';
import img from './carrousel/img';

class Carrousel extends Component {
    render () {
        return (
        <div id="carouselExampleControls" className="carouselSlide" data-ride="carousel">
            <div className="carouselInner">
                <div className="carouselItemActive">
                    <img src="./img/prueba.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carouselItem">
                    <img src="./img/prueba.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carouselItem">
                    <img src="./img/prueba.png" className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <a className="carouselControlPrev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carouselControlPrevIcon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carouselControlNext" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carouselControlNextIcon" aria-hidden="true"></span>
                <span className="srOnly">Next</span>
            </a>
        </div>
        );
    }
};
export default Carrousel;