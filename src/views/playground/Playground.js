import React, { Component } from 'react';
// Components
import Test from '../../components/test/Test';
import Button from '../../components/button/Button';
import InputElement from '../../components/input/InputElement';
import Clock from '../../components/date/Date'
import Icon from '../../components/icon/Icon';

class Playground extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: '',
            busqueda2: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        const { target: { value, id } } = event;
        this.setState({
            [id]: value
        })
    }

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

                <article id="inputElement">
                    <h3>InputElement</h3>
                    <InputElement
                        value={this.state.busqueda} 
                        label="busqueda" 
                        type="search" 
                        id="busqueda" 
                        placeholder="busqueda" 
                        handleOnChange={this.handleOnChange}
                    />
                    <InputElement
                        value={this.state.busqueda2} 
                        label="busqueda2" 
                        type="text" 
                        id="busqueda2" 
                        placeholder="busqueda" 
                        handleOnChange={this.handleOnChange}
                    />
                    <form>
                        <div className="form-inline-group">
                            <InputElement
                                onLeft
                                value={this.state.busqueda2} 
                                label="busqueda3" 
                                type="text" 
                                id="busqueda3" 
                                placeholder="busqueda" 
                                handleOnChange={this.handleOnChange}
                                />
                        </div>
                    </form>
                    <h4>Propiedades</h4>
                    <ul>
                        <li>label. Agrega un label que puede ir arriba o a la izquierda del componente</li>
                        <li>type. Para activar el buscador, deben colocar type="search"</li>
                        <li>id. Añade un identificar único al input</li>
                        <li>placeholder. Añade un placeholder</li>
                        <li>Description. Permite agregar una descripción abajo del input.</li>
                        <li>onLeft. Coloca el label a la izquierda del input</li>
                        <li>handleOnChange. Permite manipular el estado en los formularios.</li>
                    </ul>
                </article>

                <article id="clock"> 
                    <h3>Clock component</h3>
                    <Clock />
                    </article>    

                <article id="icon">
                    <h3>Icon Component</h3>
                    <h4>Propiedades</h4>
                        <Icon
                        name = "facebook"
                        />
                    <ul>
                        <li>id</li>
                        <li>name</li>
                        <li>color</li>
                        <li>size</li>
                        <li>onClick</li>
                        
                    </ul>

                </article>
            </div>
        );
    }
}

export default Playground;