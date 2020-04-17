import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Catfish from "../../style/catfish.jpg"

export default class NavigationComponent extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="center-wrapper">
                <div className="about-header">
                    <h1>About Us</h1>    
                </div>
                <div className="center-pic">
                    <img src={Catfish} alt="" />
                </div>


                <div className="header-text">
                    <h1>Why Catfish?</h1>
                </div>

                <div className="center-text">
                    <p1>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam,quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                        </p1>
                </div>
                <div className="about-footer">

                </div>
            </div>
        );
    }
}

