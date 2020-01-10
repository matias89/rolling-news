import React from 'react';

const Icon = props => {
const {id, name , color , size , onClick} = props;
const iconClass = `btn btn-${color} btn-${size}`;
return(
    <icon
    id={id}
    name={name}
    className={iconClass}
    onClick={onClick}

    >
    </icon>
);
};
export default Icon;