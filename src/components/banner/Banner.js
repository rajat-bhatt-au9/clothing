import React from 'react';
import './banner.scss';
import { Link } from 'react-router-dom';

const Banner =()=>(
    <div className='banner'>
            <h1 className='main-heading'>Sale Now !!</h1>
            <p className='para'>Online and in stores.</p>
            
            <Link className='link' to='/shop'> Checkout </Link>
    
    </div>
)

export default Banner;