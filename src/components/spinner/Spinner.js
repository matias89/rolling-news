import React, { Component } from 'react';
//style
import './spinner.css';

const Spinner = () => {
    return (
        <div className= "smithers1">
            <div className="smithers">
                 <div className="d-flex justify-content-center">
                     <p>Loading</p>
                     <div className="spinner-border" role="status">
                         <span className="sr-only">Loading...</span>
                     </div>
                 </div> 
             </div>    
         </div>
               
    )
}

export default Spinner;

