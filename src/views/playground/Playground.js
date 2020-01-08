import React, { Component } from 'react';
// Components
import Test from '../../components/test/Test';
import Button from '../../components/button/Button';
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
                    <Button 
                        id="1"
                        text="Aceptar"
                        type="submit"
                        size="md"
                        color="success" 
                        onClick = {() => {console.log("Acpetar")}}
                        icon=""
                    />
                    <Button 
                        id="1"
                        text="Cancelar"
                        type="submit"
                        size="md"
                        color="danger" 
                        onClick = {() => {console.log("Cancelar")}}
                        icon=""
                    />
                    <h4>Propiedades</h4>
                    <ul>
                        <li>id</li>
                        <li>text</li>
                        <li>type</li>
                        <li>size</li>
                        <li>color</li>
                        <li>onClick</li>
                        <li>icon</li>
                    </ul>
                </article>

            </div>
        );
    }
}

export default Playground;