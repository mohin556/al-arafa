import React from 'react';
import image from '../Image/al-arafa islami bank.png';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
          <div className='navbar-left'>
           <img className='nav-image' src={image} alt="" />
          </div>
          <div className='navbar-right'>
                <a className='nab-link' href=""> Deposit   </a>
               <a className='nab-link' href=""> Foreign Trade   </a>
               <a className='nab-link' href=""> User   </a>
               <a className='nab-link' href=""> Admin   </a>
               <a className='nab-link' href=""> Contact   </a>
               <a className='nab-link' href=""> Login   </a>
               <Link className='nab-link' to="/about">About</Link>
               
          


          </div>
        </div>
    );
};

export default Navbar;