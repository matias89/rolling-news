import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook , faInstagram} from '@fortawesome/free-brands-svg-icons'

const Icon = props => {
const {id, name , color , size , onClick} = props;
let icon;


switch(name) {
    case 'facebook':
        icon = faFacebook;
        break;
    case 'twitter':
        icon = faTwitter;
        break;
     case 'instagram':
       icon = faInstagram;
        break;
            }
 
return(
    <FontAwesomeIcon icon={icon} size={size} color={color} />
    );
    
};
export default Icon;

