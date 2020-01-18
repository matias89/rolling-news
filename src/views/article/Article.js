import React, {Component} from 'react';


import InputElement from '../../components/input/InputElement';
import Button from '../../components/button/Button';


class Article extends Component {
    constructor(props){
        super(props);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnSave = this.handleOnSave.bind(this);
        this.handleOnCancel = this.handleOnCancel.bind(this);
        this.state = {
            imgItems: []
        }
    }
    handleOnAdd(){
        this.setState({
            imgItems: [...this.state.imgItems, {}]
        });
    }
    handleOnSave(){
        console.log('guardar')
    }
    handleOnCancel(){
        console.log('cancelar')
    }
    render() {
        return (
            <div>
                <h4>Titulo 1</h4>
                <InputElement />
                <section>
                    {this.state.imgItems.map(item => {
                        return (
                            <InputElement />
                        );
                    })}
                </section>
                <div>
                    <Button 
                         id="1"
                         text="Añadir"
                         type="submit"
                         size="md"
                         color="success" 
                         onClick={this.handleOnAdd}
                         icon=""
                    />
                     <Button 
                        id="1"
                        text="Guardar"
                        type="submit"
                        size="md"
                        color="primary" 
                        onClick = {this.handleOnSave}
                        icon=""
                    />
                     <Button 
                        id="1"
                        text="Cancelar"
                        type="submit"
                        size="md"
                        color="danger" 
                        onClick = {this.handleOnCancel}
                        icon=""
                    />
                </div>
           
               
                 <div className="container">
                    <InputElement label="Título"/>
            
                    <InputElement label="Copete"/>
            
                    <textarea label ="Cuerpo"></textarea>                 
                </div>
               
            

    }
}

export default Article;