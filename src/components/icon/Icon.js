import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Icon = props => {
const {id, name , color , size , onClick} = props;
const iconClass = `fab-fa${color} fab-fa${size}`;
const element = <FontAwesomeIcon icon={faCoffee} />
return(
    <icon
    id={id}
    name={name}
    className={iconClass}

    >
    </icon>
);
};
export default Icon;
ReactDOM.render(element, document.body)