import React, { Component } from 'react';

import { get, post } from '../../utils/services';

class Home extends Component {
    componentDidMount() {
        get('https://jsonplaceholder.typicode.com/posts').then(response => console.log(response));
        post('https://jsonplaceholder.typicode.com/posts');
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;