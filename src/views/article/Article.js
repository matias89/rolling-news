import React, {Component} from 'react';
import InputElement from '../../components/input/InputElement';
import Button from '../../components/button/Button';
import { post } from '../../utils/services';



class Article extends Component {
    constructor(props){
        super(props);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnSave = this.handleOnSubmit.bind(this);      
        this.state = {
            imgItems: []
        }
    }
    handleOnAdd(){
        this.setState({
            imgItems: [...this.state.imgItems, {}]
        });
    }
    handleOnSubmit(){
        post('http://localhost:3000/articles', 
         {            
            "title": "Vienen por Almendra y Boca va por Pol Fernandez ",
            "date": "07 de Enero - 15:59",
            "copete": "El pase de Agustín Almendra (foto) es un tema recurrente en el mundo Boca. Siempre se dijo que su destino está en Europa, pero ayer se conoció un interés firme de Inter (Miami) por el volante. La franquicia de la MLS que capitanea David Beckham está dispuesta a pagar 10 millones de dólares.",
            "image": "https://img.lagaceta.com.ar/fotos/notas/2020/01/08/vienen-almendra-van-pol-fernandez-830894-230218.jpg",
            "description": "En el rubro contrataciones se habla de un interés por la “repatriación” de Guillermo Pol Fernández, actualmente en México. Es un jugador que le gusta a Riquelme. Racing también está interesado en el jugador, cuya ficha pertenece a Cruz Azul. Todavía no hay definición en cuanto al interés de Boca por Edwin Cardona, ya que según el representante del colombiano recibieron varias ofertas."
          }
        
        ).then(post=>{
            
        })
        
    }
   
    render() {
        return (
            <div className="container">
                <InputElement label="Título" id="titulo"/>
                <br/>
                <InputElement label="Copete" id="copete" />
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
                            <InputElement id="imagen"/>
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
                        onClick = {this.handleOnSubmit}
                        icon=""
                    />
                    
                    <Button
                    id="2"
                    text="Cancelar"
                    type="submit"
                    size="md"
                    color="danger" 
                    onClick = {
                        () => {
                            if(window.confirm("está seguro?")) {
                                window.location.href= "/articles";
                            }
                        }                        
                    }                    
                    />
                    
                </div>
             </div>  
        )}
}

export default Article;