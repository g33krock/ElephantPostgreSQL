import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Input, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { campusService } from '../services/campusService';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            campuses: []
        };
    }

    componentDidMount() {
        campusService.all().then((campuses) => {
            this.setState({
                campuses
            })
            console.log(this.state.campuses)
        })
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>The Pirate Portal</h1>
                                <h2>Abandon all hope ye who enter here!</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src='/assets/images/PirateShip.png' height="50" width="50" alt="Pirate Ship"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/teachers">Teachers</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/students">Students</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/schedules">Schedule</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <Col sm={3}>
                            <Input type="select">
                                {this.state.campuses.map((campus) => <option>{campus.name}</option>)}
                            </Input>
                        </Col>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header