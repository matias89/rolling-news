import React, { Component } from 'react';
import Spinner from '../../components/spinner/Spinner';

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
                <Spinner />
            </div>
        );
    }
}

export default Home;