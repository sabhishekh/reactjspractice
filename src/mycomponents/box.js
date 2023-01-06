import React from 'react';
import logo from './istockphoto.jpg';
console.log(logo);

export default function Box(){
    return(<div className='box-cantainer'>
        <div>item1</div>
        <img  className="img-cantainer"src={logo} alt="logo" width={500} height={500}/>
    </div>
    
)
}