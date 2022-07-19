import React from 'react';
import { Nav,Navbar,NavbarBrand,Collapse,NavItem,NavLink,NavbarToggler,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText } from 'reactstrap';
import Header from './Header';



class HeaderSpa extends React.Component{
   
    

    render() {

        return(
        <>
        <header>
        <Navbar
            color="dark"
            dark
            expand="md"
            light
            container="md"
            className="mb-0"
        >
           
            <NavbarBrand  onClick={() => this.props
                            .updateState('home')}>
                <img src="https://mediafest22.org/wp-content/uploads/2022/01/MediaFest22_RedWhite_Horiz.svg" alt="mediafest22" />
               
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
            <Nav
                className="me-auto"
                navbar
            >
                <NavItem>
                    <NavLink className={(this.props.page=='speakers'?"active":"")} 
                            onClick={() => this.props
                            .updateState('speakers')}>
                        
                        2022 Fellows
                    </NavLink>
                </NavItem>


                <NavItem>
                    <NavLink className={(this.props.page=='registration'?"active":"")
                            }onClick={() => this.props
                            .updateState('registration')}>
                        Registration
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(this.props.page=='travel'?"active":"")}
                            onClick={() => this.props
                            .updateState('travel')}>
                    Hotel/Travel/Dining
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(this.props.page=='schedule'?"active":"")}
                            onClick={() => this.props
                            .updateState('schedule')}>
                    Schedule
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(this.props.page=='covid'?"active":"")}
                            onClick={() => this.props
                            .updateState('covid')}>
                    COVID-19
                    </NavLink>
                </NavItem>


               
            </Nav>
           
            </Collapse>
            
        </Navbar>

       
        </header>

        </>
        )
    }
}

export default HeaderSpa;