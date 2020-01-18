import React, {Component} from 'react';


import InputElement from '../../components/input/InputElement';


class Article extends Component {
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
                
                            
            </div>
        );
    }
}

export default Article;