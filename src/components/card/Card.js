import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/card/style.css';


const Card = ({ title, subTitle, someText, cardLink, date, img }) => {
    return (
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <img src={img} className="card-img-top" className="img-fluid"/>
                    <h6 className="card-subtitle mb-2 text-muted subtitle"> { subTitle } </h6>
                    <p className="card-text">{ someText }</p>
                    <div className="d-flex justify-content-between">
                        <div>
                          <Link className="card-link" to={cardLink}>Ver más</Link>
                        </div>
                        <div>
                        <p className="card-text text-right"><small>{ date }</small></p>
                        </div>
                    </div>                                      
                </div>
            </div>
    );
}

export default Card;