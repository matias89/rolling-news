import React from 'react';
import '../../components/card/style.css';


const Card = ({ title, subTitle, someText, cardLink, date }) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <img src="https://cnet1.cbsistatic.com/img/jerqdm92TwXKKfPjnNpO0gIK5VE=/868x488/2019/08/14/71b1ffaf-a502-42c4-94d5-2bb3da0444fe/samsung-galaxy-a20-1.jpg" className="card-img-top" className="img-fluid"/>
                    <h6 className="card-subtitle mb-2 text-muted subtitle"> { subTitle } </h6>
                    <p className="card-text">{ someText }</p>
                    <a href="#" className="card-link">{ cardLink }</a>
                    <a href="#" className="card-link">{ date }</a>
                    
                </div>
            </div>
        </div>
    );
}

export default Card;