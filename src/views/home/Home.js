import React, { Component } from 'react';
import Spinner from '../../components/spinner/Spinner';

class Home extends Component {
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