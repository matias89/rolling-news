import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Detail extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>Detail {this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default withRouter(Detail);