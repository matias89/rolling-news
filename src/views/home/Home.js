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
            articlesCard:[]
          };
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
            const articlesCarrousel = articles.slice(0,2);
            const articlesAside = articles.slice(2, 4);
            const articlesCard = articles.slice(4, 9);

            this.setState({
                articles,
                articlesCarrousel,
                articlesAside,
                articlesCard
            });
            console.log(articlesCard);
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
                <div className='row'>
                    <div className='col-8'>
                        <Carrousel
                            items={[
                                {
                                    imgName:'https://img.over-blog-kiwi.com/2/36/16/91/20171027/ob_d8e2b5_cuidados-en-el-primer-mes-de-vida-de-u.jpg',
                                    title: 'noticia principal',
                                    description: 'description de producto de pueba',
                                    path: '/article/1',
                                },{
                                    imgName:'https://upload.wikimedia.org/wikipedia/commons/f/f4/Perrito_triste.jpg',
                                    title: 'noticias mas recientes',
                                    description: 'segundo perrito de prueba',
                                    path: '/article/2',
                                },
                                {
                                    imgName:'https://thehappening.com/wp-content/uploads/2018/12/sombreros-perritos-7.jpg',
                                    title: 'noticias de prueba ',
                                    description: 'otro perrito de prueba',
                                    path: '/article/3',
                                    
                                },
                            ]}
                        />
                    </div>
                    <div className='col-4'>
                    <Aside
                        items={[
                            {
                                id: 1,
                                title:'titulo1',
                                img: 'https://www.hola.com/imagenes/estar-bien/20180831128704/ronroneo-gatos-causas/0-595-638/gato-ronroneo-1-t.jpg?filter=w600&filter=ds75'
                            },
                            {
                                id: 2,
                                title:'titulo2',
                                img: 'https://www.hola.com/imagenes/estar-bien/20180831128704/ronroneo-gatos-causas/0-595-638/gato-ronroneo-1-t.jpg?filter=w600&filter=ds75'
                            },
                            {
                               id: 3,
                               title: 'Titulo 3',
                               img: 'https://ichef.bbci.co.uk/news/410/cpsprodpb/8536/production/_103520143_gettyimages-908714708.jpg' 
                            }
                        ]}
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <Card 
                            title="Card Component" 
                            subTitle="Subtitulo" 
                            someText="Texto descriptivo de la noticia" 
                            cardLink="Link 1" 
                            date="11/01/2020"
                        />
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-6'>
                                <Card 
                                    title="Card Component" 
                                    subTitle="Subtitulo" 
                                    someText="Texto descriptivo de la noticia" 
                                    cardLink="Link 1" 
                                    date="11/01/2020"
                                />
                            </div>
                            <div className='col-6'>
                                <Card 
                                    title="Card Component" 
                                    subTitle="Subtitulo" 
                                    someText="Texto descriptivo de la noticia" 
                                    cardLink="Link 1" 
                                    date="11/01/2020"
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <Card 
                                    title="Card Component" 
                                    subTitle="Subtitulo" 
                                    someText="Texto descriptivo de la noticia" 
                                    cardLink="Link 1" 
                                    date="11/01/2020"
                                />
                            </div>
                            <div className='col-6'>
                                <Card 
                                    title="Card Component" 
                                    subTitle="Subtitulo" 
                                    someText="Texto descriptivo de la noticia" 
                                    cardLink="Link 1" 
                                    date="11/01/2020"
                                />
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        );
    }
}

export default Home;