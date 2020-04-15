// import React from 'react'
import React, { Component } from 'react';
import Login from "./userprofile";

import loginImg from "../../../src/image/happycatfish.jpg";

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <div
                    className="left-column"
                    style={{
                        backgroundImage: `url(${loginImg})`
                    }}
                />

                <div className="right-column">
                    <Login />
                    <h1>Login Component goes here...</h1>
                </div>
            </div>
        );
    }
}