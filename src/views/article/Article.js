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
        
    }
    handleOnCancel(){
        
    }
    render() {
        return (
            <div className="container">
                <InputElement label="Título"/>
                <br/>
                <InputElement label="Copete"/>
                <br/>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Cuerpo</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1"></textarea>
                </div>
                <div>
                    <label>Imagen</label>
                    <Button 
                         id="1"
                         text="Añadir"
                         type="submit"
                         size="md"
                         color="success" 
                         onClick={this.handleOnAdd}
                         icon=""
                    />
                </div>          
                <section>
                    {this.state.imgItems.map(item => {
                        return (
                            <InputElement />
                        );
                    })}
                </section>
                <div className="mt-3">
                
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
             </div>  
        )}
}

export default Article;