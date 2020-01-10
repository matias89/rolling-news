import React, { Component, createElement } from 'react';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import Button from '../../components/button/Button';

class Articles extends Component {
   
    render() {
        return (
            <div className="container">
                <h1>Articles</h1>
                <ArticleItem id="1" title="Titulo1" body="Donec id elit non mi porta gravida at eget metus." />
                <ArticleItem id="2" title="Titulo2" body="Donec id elit non mi porta gravida at eget metus." />
                <div className="text-right mt-2">
                    <Button 
                        text="Agregar"
                        type="button"
                        color="primary" 
                        onClick = {() => {console.log("Agregar")}}/>
                </div>
               
            </div>
        );
    }
}

export default Articles;