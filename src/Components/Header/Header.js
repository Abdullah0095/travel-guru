import React from 'react';
import logo from '../../photos/Logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { Button } from 'react-bootstrap';
import background from '../../photos/Image/Rectangle 1.png'



const Header = () => {
    
    
    
    return (
        
      <div  className="header">
      <nav className="nav">
          <ul >
              <li>
                  <Link to="/home"> 
                  <img className="logo" src={logo} alt=""/>
                  
                  </Link>
              </li>
              <li>
                  <input type="text" size="40" placeholder="search your destination"/>
              </li>
              <li>
                  <Link to="/home">News</Link>
              </li>
              <li>
                  <Link to="/login">Destination</Link>
              </li>
              <li>
                  <Link to="/login">Blog</Link>
              </li>
              <li>
                  <Link to="/login">Contact</Link>
              </li>
              <li>
                  
                      <Link to="/login">
                            <Button variant="warning">Login</Button>
                  </Link>
                  
              </li>
          </ul>

     </nav>
     <img className="main-banner" src={background} alt=""/>


      
   </div>
   
    );
};

export default Header;