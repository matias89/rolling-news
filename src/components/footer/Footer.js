import React from 'react';
import Icon from '../icon/Icon';
const Footer = () => {
    return (
        <div>
            <div class="row">
                <div class="col-5">
                
                
                </div>
            </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4 footer-col">
                <h6><strong>Dirección</strong></h6>
                <p>General Paz N° 576, S.M. de Tucumán.
                Tucumán. Argentina.
                </p>
                <br></br>
                <p><strong>Ciudad:</strong>San Miguel de Tucumám</p>
                <br></br>
                <p><strong>Provincia:</strong>Provincia de Tucumán</p>
                              
                
            </div>
            
            <div class="col-md-4 footer-col">
                <h6><strong>Redes Sociales</strong></h6>
                <br></br>
                <a href="https://www.facebook.com" target="_blank"><Icon name="facebook" size="2x" color="#3b5998" /></a>
                <label class="ml-3">Siguenos en facebook</label>
                <br></br>
                <a href="https://www.twitter.com" target="_blank"><Icon name="twitter" size="2x" color="#00acee"/></a>
                <label class="ml-3">Siguenos en twitter</label>
                <br></br>
                <a href="https://www.instagram.com" target="_blank"><Icon name="instagram" size="2x" color="#e95058"/></a>
                <label class="ml-3">Siguenos en instagram</label>
                
            </div>
            <div class="col-md-4 footer-col">
                <strong><h6><strong>Contacto</strong></h6></strong>
                <br></br>
                <a href="https://www.whatsapp.com" target="_blank"><Icon name="whatsapp" size="2x" color="green"/></a>
                <label class="ml-3">0381 578-3030</label>
                <br></br>
                <a href="rollingnews@gmail.com" target="_blank"><Icon name="email" size="2x" color="#3b5998"/></a>
                <label class="ml-3">rollingnews@gmail.com</label>
            </div>
            
        </div>
    </div>
    
    </div>
    
    );
}

export default Footer;