import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { get } from '../../utils/services';

// Components
import Comment from '../../components/comment/Comment';
import Aside from '../../components/aside/Aside';

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: [],
            articles: []
        }
    }
    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        get(`http://localhost:3000/articles/`)
            .then(articles => {
                this.setState({
                    articles
                });
                return get(`http://localhost:3000/articles/${id}`)
                .then( article => {
                    this.setState({
                        article
                    })
                })
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{this.state.article.title}</h1>
                        <p>{this.state.article.copete}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <img src={this.state.article.image} className="img-fluid" />
                    </div>
                    <div className="col-3">
                        <Aside items={this.state.articles.slice(0, 2)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        {this.state.article.description}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <hr />
                        <h5>Comentarios</h5>
                        <Comment />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Detail);