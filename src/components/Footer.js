import React from 'react';
import { Nav,Navbar,NavbarBrand,Collapse,NavItem,NavLink,NavbarToggler,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText } from 'reactstrap';
import Socialicons from './Socialicons';

export default function Footer(){

    return(
        <div className="bg-dark  text-light text-center">
             <img src="https://mediafest22.org/wp-content/uploads/2022/01/MediaFest22_White_Horiz.svg" alt="mediafest22" width="60%" />
               
          <p>Society of Professional Journalists</p>
     
          
          
           
        <Socialicons />
        </div>
    )
}