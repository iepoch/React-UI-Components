import React from 'react';
import './Header.css';
import lambdaSchool from '../images/lambdaSchool.png';
const ImageThumbnail = () => {
    return (
       <div className = 'user-img'>
         <img src ={lambdaSchool} alt='user-lamda-img' />
            
        </div>
     
    )
}
export default ImageThumbnail;