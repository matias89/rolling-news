import React, { Component } from 'react';

import Article from '../article/Article';

class Articles extends Component {
    render() {
        return (
            <div>
                <h1>Articles</h1>
                <Article/>
            </div>
        );
    }
}

export default Articles;