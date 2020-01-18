import React, { Component } from 'react';
import Aside from "../../components/aside/Aside";

import Article from '../article/Article';

class Articles extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                <h1>Articles</h1>
                <Article/>
               
            </div>  
=======
                <div>
                    <h1>Articles</h1>
                    <Article/>                
                </div>  
                <Aside id={id} title={title} img={img} />
            </div>
>>>>>>> d3ca186e99321ab4b63b88604f660dc2e2adc3de
        );
    }
}

export default Articles;