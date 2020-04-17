import React, { Component } from 'react';
import { NavLink } from "react-router-dom";




export default class NavigationComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className='nav-link-wrapper'>
                        <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/about" activeClassName="nav-link-active">About</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/auth" activeClassName="nav-link-active">Auth</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}