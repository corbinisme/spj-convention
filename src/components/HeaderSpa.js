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
                <img src="https://mediafest22.org/wp-content/uploads/2022/07/mainLogo-1.png" alt="mediafest22" />
               
            </NavbarBrand>
            <NavbarToggler onClick={() => this.props
                            .updateState(this.props.page,true)} />
            <Collapse navbar className={(this.props.navopen? "show": "")} >
                
            <Nav
                className="me-auto"
                navbar
            >
                 <NavItem>
                    <NavLink className={(this.props.page=='schedule'?"active":"")}
                            onClick={() => this.props
                            .updateState('schedule',true)}>
                    Schedule
                    </NavLink>
                </NavItem>
               
               

                <NavItem>
                    <NavLink className={(this.props.page=='registration'?"active":"")
                            }onClick={() => this.props
                            .updateState('registration',true)}>
                        Registration
                    </NavLink>
                </NavItem>

                


               

                <NavItem>
                    <NavLink className={(this.props.page=='travel'?"active":"")}
                            onClick={() => this.props
                            .updateState('travel',true)}>
                    Travel
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={(this.props.page=='fellows'?"active":"")} 
                            onClick={() => this.props
                            .updateState('fellows',true)}>
                        
                        <span>2022</span> Fellows
                    </NavLink>
                </NavItem>

               

                <NavItem>
                    <NavLink className={(this.props.page=='covid'?"active":"")}
                            onClick={() => this.props
                            .updateState('covid',true)}>
                    COVID<span>-19</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={(this.props.page=='presenters'?"active":"")}
                            onClick={() => this.props
                            .updateState('presenters',true)}>
                    Presenters
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