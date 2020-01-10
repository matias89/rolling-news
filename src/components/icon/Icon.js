import React from 'react';

const Icon = props => {
const {id, name , color , size , onClick} = props;
const iconClass = `fab-fa${color} fab-fa${size}`;
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