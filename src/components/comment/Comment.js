import React from 'react';
import {get, post } from '../../utils/services';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.buildComments = this.buildComments.bind(this);
        this.state = {
            comments: []
          };
    }

    componentDidMount() {
        get('https://jsonplaceholder.typicode.com/comments').then(comments => {
        this.setState({
            comments
          });

          console.log(this.state.comments);
        });
    }

    buildComments() {
        
        return this.state.comments.map(comments => {
          const { id, name, email, body } = comments;          
         
          const CardTitle = React.createElement('h5', {className: 'card-title',  key:`cardTitle-${id}`}, name);
          const CardSubtitle = React.createElement('h6', {className: 'card-titlecard-subtitle mb-2 text-muted text-right', key:`cardSubtitle-${id}`}, email);
          const CardText = React.createElement('p', {className: 'card-text', key:`cardText-${id}`}, body);
		  const CardBody = React.createElement('div', {className: 'card-body'},  [CardTitle, CardSubtitle, CardText]);
          const Card = React.createElement('div', {className: 'card', key:`card-${id}` },  CardBody);
          
          return (
            <div key={`col-${id}`} className="col">
              {Card}               
            </div>
          );
        });
    }

    render() {        
        
        return(
            <>
                <div className='container'>
                    <div className="row">
                        {this.buildComments()}
                    </div>
                </div>
            </>
        );
    }
}

export default Comment;