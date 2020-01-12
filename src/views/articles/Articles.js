import React, { Component, createElement } from 'react';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import Button from '../../components/button/Button';
import { get } from '../../utils/services';

class Articles extends Component {
    
    constructor(props) {
        super(props);
        this.buildArticleItem = this.buildArticleItem.bind(this);
        this.state = {
            articles: []
          };
    }

    componentDidMount() {
        get('http://localhost:3000/articles').then(articles => {
        this.setState({
            articles
          });

          console.log(this.state.articles);
        });
    }

    buildArticleItem() {
        return this.state.articles.map(article => {

            const { id, title, copete } = article;          
            return (
                <ArticleItem key={id} id={id} title={title} body={copete} />
            );
          });
    }

    render() {
        return (
            <div className="container">
                <h1>Articles</h1>                
                {this.buildArticleItem()}
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