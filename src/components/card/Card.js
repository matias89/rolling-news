import React from 'react';

const Card = ({ title, subTitle, someText, cardLink, cardLink2 }) => {
    return (
        <div>
            <div className='card' style={{background: 'red'}}>
                <div className="card-body">
                    <img src="https://cnet1.cbsistatic.com/img/jerqdm92TwXKKfPjnNpO0gIK5VE=/868x488/2019/08/14/71b1ffaf-a502-42c4-94d5-2bb3da0444fe/samsung-galaxy-a20-1.jpg" className="card-img-top"/>
                    <h5 className="card-title">{ title }</h5>
                    <h6 className="card-subtitle mb-2 text-muted"> { subTitle } </h6>
                    <p className="card-text">{ someText }</p>
                    <a href="#" className="card-link">{ cardLink }</a>
                    <a href="#" className="card-link">{ cardLink2 }</a>
                </div>
            </div>
        </div>
    );
}

export default Card;