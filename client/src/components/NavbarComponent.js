import React, { Component } from "react";
import { withRouter, NavLink as RNavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus, faSignInAlt, faUser, faLock, faEnvelope, faPhone, faKey } from '@fortawesome/free-solid-svg-icons'

import {
    Navbar, NavbarBrand, NavbarToggler, NavbarText, Nav, Collapse, NavItem, NavLink, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown,
    Modal, ModalHeader, ModalBody, ModalFooter, Button
} from 'reactstrap';

class NavbarComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isOpen: false,
            loginModal: false,
            registerModal: false
        }
        this.nav_toggle = this.nav_toggle.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleRegister = this.toggleRegister.bind(this);
    }

    nav_toggle()
    {
        this.setState({nav_isOpen: !this.state.nav_isOpen});
    }
    toggleLogin()
    {
        this.setState({
            loginModal: !this.state.loginModal,
            registerModal: false
        });
    }
    toggleRegister()
    {
        this.setState({
            registerModal: !this.state.registerModal,
            loginModal: false
        });
    }

    render()
    {
        return (
            <div className="container" style={{position:"sticky", top:"10px", marginTop:"-40px", zIndex:"1"}}>
                <Navbar style={{
                    zIndex:"1",
                    backgroundColor: "white",
                    padding:"8px",
                    minHeight:"80px",
                    boxShadow: "-2px -2px 6px 1px rgb(40,5,20)",
                    borderRadius: "15px"}} light expand="md"
                >
                    
                    <a href="/">
                        <img style={{width:"auto", height:"50px", maxWidth:"97vw"}} src="img/app-logo-2.png" alt="loading..."/>
                    </a>
                    <NavbarToggler pullRight style={{borderRadius:"10px", marginTop:"-2px", height:"50px", padding:"10px", outline:"none", backgroundColor:"rgba(200,100,200,0.08)", color:"gray"}} onClick={this.nav_toggle} />
                    
                    <Collapse isOpen={this.state.nav_isOpen} navbar>
                        <Nav className="mr-auto">
                            <a href="/">
                                <img style={{width:"auto", height:"50px", maxWidth:"97vw"}} src="img/app-title-2.png" alt="loading..."/>
                            </a> 
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-links-sk" style={{fontSize:"1.5rem", paddingLeft:"5px"}}>
                                    <RNavLink style={{textDecoration:"none", color: "gray"}} activeClassName="nav-links-active" to='/home'>Home</RNavLink>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-links-sk" style={{fontSize:"1.5rem", paddingLeft:"5px"}}>
                                    <RNavLink style={{textDecoration:"none", color: "gray"}} activeClassName="nav-links-active" to='/about'>About</RNavLink>
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="nav-links-sk" style={{fontSize:"1.5rem", paddingLeft:"5px"}}>Get started</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={this.toggleLogin}><FontAwesomeIcon icon={faSignInAlt} /> Login</DropdownItem>
                                    <DropdownItem onClick={this.toggleRegister}><FontAwesomeIcon icon={faUserPlus} /> Register</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                {/* Modal for LOGIN */}
                <Modal size="sm" isOpen={this.state.loginModal} toggle={this.toggleLogin}>
                    <ModalHeader toggle={this.toggleLogin}>
                    <span href="/">
                        <img style={{width:"auto", height:"45px", maxWidth:"97vw"}} src="img/app-logo-2.png" alt="loading..."/>
                    </span>
                    <span href="/">
                        <img style={{width:"auto", height:"45px", maxWidth:"97vw"}} src="img/app-title-2.png" alt="loading..."/>
                    </span>
                    </ModalHeader>
                    <ModalBody  style={{backgroundColor: "#d8e3db"}}>
                        <form className="form-group" action="">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    </div>
                                </div>
                                <input type="text" className="form-control" id="ip-username" placeholder="Enter Username" />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                    </div>
                                </div>
                                <input type="password" className="form-control" id="ip-password" placeholder="Enter Password" />
                            </div>
                            <br/>
                            <label htmlFor="usertype">Select User-type</label>
                            <select className="form-control" name="usertype" id="usertype">
                                <option value="">--NA--</option>
                                <option value="school">As School</option>
                                <option value="student">As Student</option>
                            </select>
                            <Button type="submit" className="mt-2 btn btn-lg btn-block btn-warning" onClick={this.toggleLogin}>Login</Button>
                            <span className="non-anchored-links" onClick={this.toggleRegister}>Don't have an account yet? REGISTER!</span>
                        </form>
                    </ModalBody>
                </Modal>
                {/* Modal for REGISTER */}
                <Modal size="md" isOpen={this.state.registerModal} toggle={this.toggleRegister}>
                    <ModalHeader toggle={this.toggleRegister}>
                    <span href="/">
                        <img style={{width:"auto", height:"45px", maxWidth:"97vw"}} src="img/app-logo-2.png" alt="loading..."/>
                    </span>
                    <span href="/">
                        <img style={{width:"auto", height:"45px", maxWidth:"97vw"}} src="img/app-title-2.png" alt="loading..."/>
                    </span>
                    </ModalHeader>
                    <ModalBody  style={{backgroundColor: "#d8e3db"}}>
                        <form className="form-group" action="">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    </div>
                                </div>
                                <input type="text" className="form-control" id="ip-username" placeholder="Enter a Username" />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                    </div>
                                </div>
                                <input type="password" className="form-control" id="ip-password" placeholder="Enter Password" />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                    </div>
                                </div>
                                <input type="cpassword" className="form-control" id="ip-cpassword" placeholder="Confirm Password" />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </div>
                                </div>
                                <input type="email" className="form-control" id="ip-email" placeholder="Email" />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                    </div>
                                </div>
                                <input type="tel" pattern="^\d{10}$" className="form-control" id="ip-contact" placeholder="Contact Number" />
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-md btn-secondary">Send OTP</button>
                                </div>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                                    </div>
                                </div>
                                <input type="number" className="form-control" id="ip-otp" placeholder="Enter the 6-digit OTP" />
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-md btn-danger">Verify OTP</button>
                                </div>
                            </div>
                            <br/>
                            <label htmlFor="usertype">Select User-type</label>
                            <select className="form-control" name="usertype" id="usertype">
                                <option value="">--NA--</option>
                                <option value="school">As School</option>
                                <option value="student">As Student</option>
                            </select>
                            <Button type="submit" className="mt-2 btn btn-lg btn-block btn-info" onClick={this.toggleRegister}>Register</Button>
                            <span className="non-anchored-links" onClick={this.toggleLogin}>Already have an account? LOGIN!</span>
                        </form>
                    </ModalBody>
                </Modal>
            </div>         
        );
    }
}

export default withRouter(NavbarComponent);