import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <h1>{Title}</h1>
                            <p>{Lead}</p>
                        </div>
                        <div className="col-3">
                            <Aside />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <Carousel />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <p>{NewsBody}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Comment />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Detail;