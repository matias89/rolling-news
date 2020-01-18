import React, { Component } from 'react';
import Aside from "../../components/aside/Aside";

import Article from '../article/Article';

class Articles extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Articles</h1>
                    <Article/>                
                </div>
            </div>
        );
    }
}

export default Articles;