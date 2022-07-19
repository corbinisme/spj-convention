import React from 'react';
import { Nav,Navbar,NavbarBrand,Collapse,NavItem,NavLink,NavbarToggler,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText } from 'reactstrap';



export default function Header(props){

    return(
        <header>
        <Navbar
            color="dark"
            dark
            expand="md"
            light
            container="md"
            className="mb-0"
        >
           
            <NavbarBrand href="/">
                <img src="https://mediafest22.org/wp-content/uploads/2022/01/MediaFest22_RedWhite_Horiz.svg" alt="mediafest22" />
               
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
            <Nav
                className="me-auto"
                navbar
            >
                <NavItem>
                    <NavLink href="/speakers/">
                        2022 Fellows
                    </NavLink>
                </NavItem>


                <NavItem>
                    <NavLink href="/registration/">
                        Registration
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/travel/">
                    hotel-travel-dining
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/schedule/">
                    Schedule
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/covid/">
                    COVID-19
                    </NavLink>
                </NavItem>


               
            </Nav>
           
            </Collapse>
            
        </Navbar>

       
        </header>



    )
}