import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook , faInstagram} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Icon = props => {
const {id, name , color , size , onClick} = props;
let icon;


switch(name) {
    case 'facebook':
        icon = {faFacebook};
        break;
    case 'twitter':
        icon = {faTwitter};
        break;
     case 'instagram':
       icon = {faInstagram};
        break;
}
const iconClass = `fab-fa${color} fab-fa${size}`;
 
return(
    <FontAwesomeIcon icon={icon} />
);
};
library.add(fas)
library.add(faTwitter, faFacebook , faInstagram)
export default Icon;
