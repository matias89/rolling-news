import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { get } from '../../utils/services';

// Components
import Comment from '../../components/comment/Comment';

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: []
        }
    }
    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        get(`http://localhost:3000/articles/${id}`)
            .then(article => {
                this.setState({
                    article
                });
            });
    }
    render() {
        const { article: { title, copete, description } } = this.state;
        return (
            <div>
                <div>
                    Header
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>{title}</h1>
                            <p>{copete}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            Carousel
                        </div>
                        <div className="col-3">
                            Aside
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            {description}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Comment />
                        </div>
                    </div>
                </div>
                <div>Footer</div>
            </div>
        );
    }
}

export default withRouter(Detail);