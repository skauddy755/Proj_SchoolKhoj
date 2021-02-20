import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import NavbarComponent from "./NavbarComponent";

class SecretComponent extends Component
{
    render()
    {
        return (
            <div className="jumbotron">
                <NavbarComponent />
                <h1 className="display">This is some SECRET-INFO component</h1>
            </div>
        );
    }
}
class AboutComponent extends Component
{
    render()
    {
        return (
            <div className="jumbotron">
                <NavbarComponent />
                <h1 className="display">This is ABOUT</h1>
            </div>
        );
    }
}

class MainComponent extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <Router>
                <Switch>
                    <Route path="/home" render={(p)=>(<HomeComponent />)} />
                    <Route path="/about" render={(p)=>(<AboutComponent />)} />
                    <Route path="/secret" render={(p)=>(<SecretComponent />)} />
                </Switch>
            </Router>

        );
    }
}

export default MainComponent;