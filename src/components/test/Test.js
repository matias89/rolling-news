import React from 'react';

const Test = ({ testProp }) => {
    return (
        <div style={{background: 'blue', padding: '10px', color: 'white'}}>
            <h4>Soy un componente de prueba - { testProp }</h4>
        </div>
    );
};

export default Test;