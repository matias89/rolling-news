import React, { Component } from 'react';
// Components
import Test from '../../components/test/Test';
import Button from '../../components/button/Button';
import Carrousel from '../../components/carrousel/Carrousel';
class Playground extends Component {
    render() {
        return (
            <div id="playground" className="container">
                <h1>PlayGround</h1>
                
                <article id="test">
                    <h3>Test Component</h3>
                    <Test testProp="Soy una propiedad" />
                    <h4>Propiedades</h4>
                    <ul>
                        <li>testProp</li>
                    </ul>
                </article>

                <article id="button">
                    <h3>Button Component</h3>
                    <Button id="1" />
                    <h4>Propiedades</h4>
                    <ul>
                        <li>id</li>
                    </ul>
                </article>
                <div>
                <Carrousel />
                </div>
                

            </div>
        );
    }
}

export default Playground;