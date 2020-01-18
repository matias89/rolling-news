import React, {Component} from 'react';


import InputElement from '../../components/input/InputElement';


class Article extends Component {
    render() {
        return (
            <div className="container">
                        <InputElement label="Título"/>
                
                        <InputElement label="Copete"/>
                
                        <InputElement label="Cuerpo" $inputInline="textarea" />
            </div>
        );
    }

}

export default Article;