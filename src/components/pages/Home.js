import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";


export default class PortfolioItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            liked1: "white",
            liked2: "white",
            liked3: "white",
            liked4: "white",
            liked5: "white",
            liked6: "white",
            liked7: "white",
            liked8: "white",
            liked9: "white",
            liked10: "white"
            
        }
    }

    handleLike = () => {
        this.setState({
            liked1: "#207b88"
        })
    }
    handleDislike = () => {
        this.setState({
            liked1: "#922a2a"
        }) 
    }

    handleLike2 = () => {
        this.setState({
            liked2: "#207b88"
        })
    }
    handleDislike2 = () => {
        this.setState({
            liked2: "#922a2a"
        }) 
    }

    handleLike3 = () => {
        this.setState({
            liked3: "#207b88"
        })
    }
    handleDislike3 = () => {
        this.setState({
            liked3: "#922a2a"
        }) 
    }
    
    handleLike4 = () => {
        this.setState({
            liked4: "#207b88"
        })
    }
    handleDislike4 = () => {
        this.setState({
            liked4: "#922a2a"
        }) 
    }

    handleLike5 = () => {
        this.setState({
            liked5: "#207b88"
        })
    }
    handleDislike5 = () => {
        this.setState({
            liked5: "#922a2a"
        }) 
    }

    handleLike6 = () => {
        this.setState({
            liked6: "#207b88"
        })
    }
    handleDislike6 = () => {
        this.setState({
            liked6: "#922a2a"
        }) 
    }

    handleLike7 = () => {
        this.setState({
            liked7: "#207b88"
        })
    }
    handleDislike7 = () => {
        this.setState({
            liked7: "#922a2a"
        }) 
    }

    handleLike8 = () => {
        this.setState({
            liked8: "#207b88"
        })
    }
    handleDislike8 = () => {
        this.setState({
            liked8: "#922a2a"
        }) 
    }

    handleDislike9 = () => {
        this.setState({
            liked9: "#922a2a"
        }) 
    }

    handleLike10 = () => {
        this.setState({
            liked10: "#207b88"
        })
    }
    handleDislike10 = () => {
        this.setState({
            liked10: "#922a2a"
        }) 
    }

    render() {
        return (
                <div className="home-wrapper">
                    <div className="page-header">
                        <h1>Welcome to the DS Dating website!</h1>
                    </div>
                    <div className="catfish-header">
                        <h2>Local catfish around you:</h2>
                    </div>
                    <div className="body-wrapper">
                        <div className="profile-wrapper" style={{backgroundColor:`${this.state.liked1}`}}>
                            <div id="pic-container">
                                <img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQieGxqkV3nJLlC-TFRnaRHDi9V4hNHUeoNet7lvaNh-kc20_SI&usqp=CAU" />
                            </div>
                            <div id="description">
                                Bold and daring
                            </div>
                            <div id="age">
                                17 
                            </div>
                            <div id="location">
                                27
                            </div>
                            <div id="like-container">
                                <button className="button" onClick={this.handleLike}>Like</button>
                                <button className="button" onClick={this.handleDislike}>Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper" style={{backgroundColor:`${this.state.liked2}`}}>
                            <div id="pic-container">
                                <img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGp2iVnXDZZk2I-3sT54CBnWpYv1UjFNCtxPsf8QuIajHXhgD9&usqp=CAU" />
                            </div>
                            <div id="description">
                                Open to adventure
                            </div>
                            <div id="age">
                                26
                            </div>
                            <div id="location">
                                10
                            </div>
                            <div id="like">
                                {this.state.liked}
                            </div>
                            <div id="like-container">
                                <button className="button" onClick={this.handleLike2}>Like</button>
                                <button className="button" onClick={this.handleDislike2}>Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper" style={{backgroundColor:`${this.state.liked3}`}}>
                            <div id="pic-container">
                                <img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVSP3cgiW3hd5iXQRvpy1_SjTy0e1cpbDQJ9varcSsGXXeqtNx&usqp=CAU" />
                            </div>
                            <div id="description">
                                Outdoorsy
                            </div>
                            <div id="age">
                                36
                            </div>
                            <div id="location">
                                95
                            </div>
                            <div id="like-container">
                                <button className="button" onClick={this.handleLike3}>Like</button>
                                <button className="button" onClick={this.handleDislike3}>Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper" style={{backgroundColor:`${this.state.liked4}`}}>
                            <div id="pic-container">
                                <img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRE6SsyMhzMFIK8aQ009nx-RDSSxVs85a1l8YXFp5_HZF3r83zq&usqp=CAU" />
                            </div>
                            <div id="description">
                                Wild heart
                            </div>
                            <div id="age">
                                19
                            </div>
                            <div id="location">
                                10
                            </div>
                            <div id="like-container">
                                <button className="button" onClick={this.handleLike4}>Like</button>
                                <button className="button" onClick={this.handleDislike4}>Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper" style={{backgroundColor:`${this.state.liked5}`}}>
                            <div id="pic-container">
                                <img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7V-XB8M5Tf1QjHY7Eg0Ab6_-DHfVrh8K61eVh0eX49mHY2W7m&usqp=CAU" />
                            </div>
                            <div id="description">
                                Cutie pie
                            </div>
                            <div id="age">
                                25
                            </div>
                            <div id="location">
                                2
                            </div>
                            <div id="like-container">
                                <button className="button" onClick={this.handleLike5}>Like</button>
                                <button className="button" onClick={this.handleDislike5}>Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper" style={{backgroundColor:`${this.state.liked6}`}}>
                            <div id="pic-container">
                                <img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG2-sb_I_gq93oW8pM4EzixVkzUe3702u1OyaAkOu32q3A7ml-&usqp=CAU" />
                            </div>
                            <div id="description">
                                My name is Joe, I rarely take my shirt off ;)
                            </div>
                            <div id="age">
                                9
                            </div>
                            <div id="location">
                                Doesn't matter, you're comin to my place
                            </div>
                            <div id="like-container">
                                <button className="button" onClick={this.handleLike6}>Like</button>
                                <button className="button" onClick={this.handleDislike6}>Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper" style={{backgroundColor:`${this.state.liked7}`}}>
                            <div id="pic-container">
                                <img id="pic" src="data:image/jpeg;base64,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" />
                            </div>
                            <div id="description">
                                I love to flex my knowledge and talk too damn fast
                            </div>
                            <div id="age">
                                50 w/beard, 12 w/out
                            </div>
                            <div id="location">
                                123 anywhere location
                            </div>
                            <div id="like-container">
                                <button className="button" onClick={this.handleLike7}>Like</button>
                                <button className="button" onClick={this.handleDislike7}>Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper" style={{backgroundColor:`${this.state.liked8}`}}>
                            <div id="pic-container">
                                <img id="pic" src="https://media-exp1.licdn.com/dms/image/C4D03AQFhNeeMLtRFxQ/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=W0GwyrBvASijHF924a3fQxHnEf34mBv5R5dSmpCTvIY" />
                            </div>
                            <div id="description">
                                Short redhead lookin for some fun
                            </div>
                            <div id="age">
                                12 - 24 depending on what you like baby
                            </div>
                            <div id="location">
                                Aleady at your place
                            </div>
                            <div id="like-container">
                                <button className="button" onClick={this.handleLike8}>Like</button>
                                <button className="button" onClick={this.handleDislike8}>Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper" style={{backgroundColor:`${this.state.liked9}`}}>
                            <div id="pic-container">
                                <img id="pic" src="https://media-exp1.licdn.com/dms/image/C5603AQEPrJ4xEDkuzw/profile-displayphoto-shrink_100_100/0?e=1592438400&v=beta&t=4AwBHd-vQldN0lmUlfqdNvk8bb4BF0-BExA5yBjRm8I" />
                            </div>
                            <div id="description">
                                The sexiest man around
                            </div>
                            <div id="age">
                                At least 32 ;)
                            </div>
                            <div id="location">
                                Wherever your moms house is (JM)
                            </div>
                            <div id="like-container">
                                <button className="button" onClick={this.handleDislike9}>Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper" style={{backgroundColor:`${this.state.liked10}`}}>
                            <div id="pic-container">
                                <img id="pic" src="https://media-exp1.licdn.com/dms/image/C5603AQHwDI5NHD_mVA/profile-displayphoto-shrink_100_100/0?e=1592438400&v=beta&t=9ewG7HsQT6cX1c23dvOakXivE_SlR5ay_drAdKHmrMk" />
                            </div>
                            <div id="description">
                                Another RedHead with a fiery spirit
                            </div>
                            <div id="age">
                                somewhere around 25
                            </div>
                            <div id="location">
                                36
                            </div>
                            <div id="like-container">
                                <button className="button" onClick={this.handleLike10}>Like</button>
                                <button className="button" onClick={this.handleDislike10}>Dislike</button>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="copyright-wrapper">
                            &copy; 2020 DS-Dating &#124; All rights reserved
                        </div>
                    </div>
                </div>
        );
    }
}