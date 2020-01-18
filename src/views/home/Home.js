import React, { Component } from 'react';
import InputElement from '../../components/input/InputElement';
import Carrousel from '../../components/carrousel/Carrousel';
import Aside from '../../components/aside/Aside';
import Card from '../../components/card/Card';
import { get, post } from '../../utils/services';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            articlesCarrousel:[],
            articlesAside:[],
            articlesCardPrimary:[],
            articlesCardSecondary:[],
            index:0
          };
        this.BuildCardsPrimary= this.BuildCardsPrimary.bind(this);
        this.BuildCardsSecondary= this.BuildCardsSecondary.bind(this);
        this.timerID = setInterval(
            () => this.changeAside(),
            2000
          );
    }

    componentDidMount() {
        get('http://localhost:3000/articles').then(articles => {
            articles.sort((a,b) => { 
                if (a.id > b.id) {
                    return -1;
                } else if (a,id < b.id) {
                    return 1;
                } else {
                    return 0;
                }                
            });

            articles.forEach((article, id) => {
                articles[id].path = '/article/'+article.id;
            });

            let indexAside;

            if (articles.length-2 > this.state.index){
                indexAside = this.state.index + 2;
            } else {
                this.setState({index: 0});
                indexAside = 2;
            }
            
            const articlesCarrousel = articles.slice(0,2);
            const articlesAside = articles.slice(this.state.index, indexAside);
            const articlesCardPrimary = articles.slice(4, 5);
            const articlesCardSecondary = articles.slice(5, 9);

            this.setState({
                articles,
                articlesCarrousel,
                articlesAside,
                articlesCardPrimary,
                articlesCardSecondary
            });
        });
    }

    BuildCardsPrimary() {
        return this.state.articlesCardPrimary.map(articleCard => {

            const { id, title, copete, description, path, date, image } = articleCard;          
            return (
                <Card  key ={id}
                    title={title} 
                    subTitle={copete}
                    someText={description.substring(0,100)+'...'}
                    cardLink={path}
                    date={date}
                    img={image}
                />
            );
          });
    }

    BuildCardsSecondary() {
        return this.state.articlesCardSecondary.map(articleCard => {

            const { id, title, copete, description, path, date, image } = articleCard;          
            return (
                <div className='col-12 col-md-6 col-lg-6' key ={id}>
                    <Card 
                        title={title} 
                        subTitle={copete}
                        cardLink={path}
                        date={date}
                        img={image}
                    />
                </div>
            );
          });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    changeAside() {
        get('http://localhost:3000/articles').then(articles => {
            articles.sort((a,b) => { 
                if (a.id > b.id) {
                    return -1;
                } else if (a,id < b.id) {
                    return 1;
                } else {
                    return 0;
                }                
            });

            articles.forEach((article, id) => {
                articles[id].path = '/article/'+article.id;
            });

            let indexAside;

            if (articles.length-2 > this.state.index){
                indexAside = this.state.index + 2;
            } else {
                this.setState({index: 0});
                indexAside = 2;
            }

            const articlesAside = articles.slice(this.state.index, indexAside);
            
            this.setState({
                articlesAside,
                index: indexAside
            });
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <InputElement                    
                            type="search" 
                            id="busqueda" 
                            placeholder="busqueda" 
                        />
                    </div>                    
                </div>
                <div className='row mb-2'>
                    <div className='col-12 col-lg-8'>
                        <Carrousel
                            items={this.state.articlesCarrousel}
                        />
                    </div>
                    <div className='col-4 d-none d-lg-block'>
                    <Aside
                        items={this.state.articlesAside}
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 d-none d-lg-block'>
                        {this.BuildCardsPrimary()}
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='row'>
                            {this.BuildCardsSecondary()}  
                        </div>                        
                    </div>
                </div>              
            </div>
        );
    }
}

export default Home;