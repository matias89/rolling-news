import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props);

    }    

    render() {        
        const CardTitle = React.createElement("h5", {className: "card-title"}, "titulo");
        const CardSubtitle = React.createElement("h6", {className: "card-titlecard-subtitle mb-2 text-muted text-right"}, "Card Subtitulo");
        const CardText = React.createElement("p", {className: "card-text"}, "Some quick example text to build on the card ");
        const CardBody = React.createElement("div", {className: "card-body"},  [CardTitle, CardSubtitle, CardText]);

        return(
            <>
                <div className="card">
                    {CardBody}
                </div>
            </>
        );
    }
}

export default Comment;