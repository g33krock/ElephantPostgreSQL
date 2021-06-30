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
            campuses: [],
            campus: null
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

    onChange = e => {
        const campusId = Number(e.target.value)
        const campus = this.state.campuses.find(campus => campus.id === campusId) 
        this.setState({ campus });
        console.log(campus);
        console.log(e.target.value)
      }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container" id="app">
                        <div className="row" id="wrapper">
                            <div className="col">
                                <h1 className="glitch" id="perfectdark" data-text="CyberCampus">CyberCampus</h1>
                                <h2>Let the robots do the work for you!</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src='https://qyctrtcwtwasdktftmuy.supabase.co/storage/v1/object/sign/images/Apple.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvQXBwbGUucG5nIiwiaWF0IjoxNjIzMDkyOTc0LCJleHAiOjE5Mzg0NTI5NzR9.kI-zXjC828rQxRlF0dGG0zSP1fHGFN_qaY-8h7yPSLE' height="50" width="50" alt="Pirate Ship"/></NavbarBrand>
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
                                <NavItem>
                                    <NavLink className="nav-link" to="/sped">Sped</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <Col sm={3}>
                            <Input type="select" id="selectCampus" onChange={this.onChange}>
                                <option></option>
                                {this.state.campuses.map((campus) => <option value={campus.id}>{campus.name}</option>)}
                            </Input >
                        </Col>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header