import React from 'react';
import './Footer.css';
import { FaPhone } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


export default function End(){
    return(
    <>
    


   <div className='footer-items'>
    <b >
        <span><FaTelegram size="2rem"/></span>
Email:<br/>abhishekh@gmail.com</b><br/>
<b>
    <span><FaPhone size='2rem' color='blue'/></span>
    Call:<br/>9325142762

</b>
<i>
<FaInstagram size="1.8rem"color="pink"/><FaFacebook size="1.8rem"color="blue"/><FaTwitter size="1.8rem"color="blue"/>
</i>


    
    

   </div>
        
        
    
        
        </>
    
    );
}