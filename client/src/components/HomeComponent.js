import React, { Component } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus, faSignInAlt, faStar, faStarHalfAlt, faSearch, faMapMarkerAlt, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {
    Card, CardHeader, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button, CardDeck, CardFooter,
    Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

import NavbarComponent from './NavbarComponent';

class HomeComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            loginModal: false,
            registerModal: false
        }
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleRegister = this.toggleRegister.bind(this);
    }

    toggleLogin()
    {
        this.setState({loginModal: !this.state.loginModal});
    }
    toggleRegister()
    {
        this.setState({registerModal: !this.state.registerModal});
    }

    render()
    {
        const rating = (rating) => {
            rating = rating * 1;
            let ratArr = Array(5).fill({iconName:faStar, color:"gray"});
            console.log(ratArr);
            let R = Math.floor(rating);
            let i;
            for(i=0; i<R; i++) ratArr[i] = {iconName:faStar, color:"orange"};
            
            if(rating !== R) ratArr[i] = {iconName:faStarHalfAlt, color:"orange"};
            console.log(ratArr);

            return (
            <span>
                <span>
                    <FontAwesomeIcon style={{color:ratArr[0].color}} icon={ratArr[0].iconName}></FontAwesomeIcon>
                    <FontAwesomeIcon style={{color:ratArr[1].color}} icon={ratArr[1].iconName}></FontAwesomeIcon>
                    <FontAwesomeIcon style={{color:ratArr[2].color}} icon={ratArr[2].iconName}></FontAwesomeIcon>
                    <FontAwesomeIcon style={{color:ratArr[3].color}} icon={ratArr[3].iconName}></FontAwesomeIcon>
                    <FontAwesomeIcon style={{color:ratArr[4].color}} icon={ratArr[4].iconName}></FontAwesomeIcon>
                </span>
                <i style={{color:"orangered"}}> Rating: <b>{rating}</b></i>
            </span>
        );};

        const schoolCard = (name, imgSrc, affiliation, rat, locText, locLink, contact, email) => (
            <div className="col-xl-4 col-md-4 col-sm-6 col-xs-12 mt-3">
                <Card style={{minHeight:"100%"}}>
                    <CardImg top width="100%" height="45%" src={imgSrc} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                            Affiliated to : <span style={{color:"maroon"}}>{affiliation}</span><br/>
                            {rating(rat)}<br />
                        </CardSubtitle>
                        <CardText>
                            <span>
                                <a href={locLink}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> Location:
                                </a> {locText}
                            </span><br/>
                            <span style={{color: "darkgreen"}}>
                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                <b> Contact No: </b>{contact}
                            </span><br/>
                            <span style={{color: "red"}}>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                <b> Email: </b>{email}
                            </span>
                        </CardText>
                    </CardBody>
                    <CardFooter style={{border:"none", backgroundColor:"white", padding:"0px 20px 20px"}}>
                        <Button className="btn btn-md btn-block btn-info">Visit</Button>
                    </CardFooter>
                </Card>
            </div>
        );

        return (
            <div>
                <div style={{
                    backgroundImage: `url("img/app-bg-cover.png")`,
                    backgroundSize: "cover",
                    backgroundAttachment: "scroll",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height:"70vh"
                }}></div>
                <NavbarComponent />
                <div id="intro-container" className="pb-5" style={{backgroundColor:"#03fc88", marginTop:"-40px", marginBottom:"0px", paddingTop:"50px"}}>
                    
                    <div className="container mt-4 pt-5">
                        <div className="row">
                            <div className="col-lg-7 col-sm-12">
                                <h1 className="display-4">
                                    <img style={{width:"auto", height:"100px", maxWidth:"97vw"}} src="img/app-logo-2.png" alt="loading..."/><br />
                                    School Khoj
                                </h1>
                                <p style={{fontSize:"1.5rem", fontWeight:"400"}} className="lead">
                                    School is the fist place where a student gets to interact with others. Choosing a preferable school not only facilitates a fast learning but also helps one to build his/her personality. School Khoj is an online platform where you can find your favourite school depending upon your location and other preferences.
                                </p>
                                <p style={{fontSize:"1.5rem", fontWeight:"400"}} className="lead">
                                    School Khoj also supports schools to showcase their results and assets. Schools can register themselves and provide details about their contacts and courses offered.
                                </p>
                            </div>
                            <div className="col-lg-5 col-sm-12">
                                <img style={{width:"100%", height:"auto"}} src="https://lh3.googleusercontent.com/proxy/550XxveKRzDnMCphO2nWOilFqyZaoYKJyudqo_8UtKp8UT0jtGNt8miakDAieBpFU0WaCAB0vcy3jSqmQ9kZwA" alt=""/>
                            </div>
                            <br/>
                            <div className="col-12">
                                <p style={{fontSize:"1.7rem", color:"white", fontWeight:"500", textAlign:"left"}} className="lead">
                                    Still having a doubt of which school to choose? We are here to help you!<br />Have a look at our collection of schools sorted by their city. The records contain details like their location, their course and fee structure, important nearby areas and much more...
                                </p>
                            </div>
                            <div className="col-6">
                                <button style={{height:"70px", color:"white"}} className="btn btn-lg btn-block btn-warning">LOGIN</button>
                            </div>
                            <div className="col-6">
                                <button style={{height:"70px"}} className="btn btn-lg btn-block btn-primary">REGISTER</button>
                            </div>
                        </div> 
                    </div>
                    
                </div>
                <div id="schools-list-container" className="pb-5" style={{backgroundColor:"#3d8eff"}}>
                    <div className="container">
                        <br/><br/><br/>
                        <h1 className="display-4">Some of your top schools</h1><br/>
                        
                        <div className="row" style={{padding:"0px 15px"}}>
                            <div style={{padding:"0px"}} className="col-10">
                                <input placeholder="Search School by Name" className="form-control" type="text" style={{height:"60px", width:"100%", fontSize:"1.5rem", borderRadius:"8px 0px 0px 8px"}}/>
                            </div>
                            <div style={{padding:"0px"}} className="col-2">
                                <button style={{width:"100%", height:"60px", backgroundColor:"palegreen", outline:"none", border:"none", borderRadius:"0px 8px 8px 0px"}}>
                                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                </button>
                            </div> 
                        </div>
                        <br/>
                        <div className="row">
                            {schoolCard(
                                "Denobili School CMRI Dhanbad",
                                "https://www.goingbo.com/public/images/school/de-nobili-school-dhanbad-ho-dhanbad-schools-8adhdzq.jpg",
                                "ICSE",
                                3.5,
                                "Jaiprakash Nagar, CMRI Dhanbad-826001, Jharkhand",
                                "www.google.com",
                                "+91-8909894667",
                                "myschool@gmail.com"
                            )}
                            
                            {schoolCard(
                                "Denobili School CMRI Dhanbad",
                                "https://www.goingbo.com/public/images/school/de-nobili-school-dhanbad-ho-dhanbad-schools-8adhdzq.jpg",
                                "ICSE",
                                3.5,
                                "Jaiprakash Nagar, CMRI Dhanbad-826001, Jharkhand",
                                "www.google.com",
                                "+91-8909894667",
                                "myschool@gmail.com"
                            )}
                            
                            {schoolCard(
                                "Denobili School CMRI Dhanbad oewi yteriyt iueryt eurity eriuy teriuy teriute utyeriutyeriu tyuer tyeru",
                                "https://www.goingbo.com/public/images/school/de-nobili-school-dhanbad-ho-dhanbad-schools-8adhdzq.jpg",
                                "ICSE",
                                3.5,
                                "Jaiprakash Nagar, CMRI Dhanbad-826001, Jharkhand",
                                "www.google.com",
                                "+91-8909894667",
                                "myschool@gmail.com"
                            )}
                            
                            
                            {schoolCard(
                                "Denobili School CMRI Dhanbad",
                                "https://www.goingbo.com/public/images/school/de-nobili-school-dhanbad-ho-dhanbad-schools-8adhdzq.jpg",
                                "ICSE",
                                3.5,
                                "Jaiprakash Nagar, CMRI Dhanbad-826001, Jharkhand",
                                "www.google.com",
                                "+91-8909894667",
                                "myschool@gmail.com"
                            )}
                            
                            
                            {schoolCard(
                                "Denobili School CMRI Dhanbad",
                                "https://www.goingbo.com/public/images/school/de-nobili-school-dhanbad-ho-dhanbad-schools-8adhdzq.jpg",
                                "ICSE",
                                3.5,
                                "Jaiprakash Nagar, CMRI Dhanbad-826001, Jharkhand",
                                "www.google.com",
                                "+91-8909894667",
                                "myschool@gmail.com"
                            )}
                            
                        <br/><br/><br/>
                        </div>
                    </div>
                </div>
                {/* Modal for LOGIN */}
                <Modal isOpen={this.state.loginModal} toggle={this.toggleLogin}>
                    <ModalHeader toggle={this.toggleLogin}>Modal title</ModalHeader>
                    <ModalBody></ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleLogin}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggleLogin}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default withRouter(HomeComponent);