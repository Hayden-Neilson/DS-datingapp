import React, {Component} from "react";
import { Link } from "react-router-dom";


export default class PortfolioItem extends Component {
    constructor(props){
        super(props)
        this.state = {
        }

        const liked = " "
    }

    handleLike = () => {
        this.liked.append("You liked this profile!")
    }

    render() {
        return (
                <div className="home-wrapper">
                    <div className="page-header">
                        <h1>Welcome to the Homepage!</h1>
                    </div>
                    <div className="catfish-header">
                        <h2>Local catfish around you:</h2>
                    </div>
                    <div className="body-wrapper">
                        <div className="profile-wrapper">
                            <div id="pic-container">
                                <img id="pic" src="https://cdn.cnn.com/cnnnext/dam/assets/140321002327-grandma-betty-3-horizontal-large-gallery.png" />
                            </div>
                            <div id="description">
                                Profile description
                            </div>
                            <div id="age">
                                age
                            </div>
                            <div id="location">
                                Miles from
                            </div>
                            <div id="like">
                                {this.liked}
                            </div>
                            <div id="like-container">
                                <button className="button" id="button1" onClick={this.handleLike}>Like</button>
                                <button className="button">Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper">
                            <div id="pic-container">
                                <img id="pic" src="https://cdn.cnn.com/cnnnext/dam/assets/140321002327-grandma-betty-3-horizontal-large-gallery.png" />
                            </div>
                            <div id="description">
                                Profile description
                            </div>
                            <div id="age">
                                age
                            </div>
                            <div id="location">
                                Miles from
                            </div>
                            <div id="like">
                                {this.state.liked}
                            </div>
                            <div id="like-container">
                                <button className="button" onClick={this.handleLike}>Like</button>
                                <button className="button">Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper">
                            <div id="pic-container">
                                <img id="pic" src="https://cdn.cnn.com/cnnnext/dam/assets/140321002327-grandma-betty-3-horizontal-large-gallery.png" />
                            </div>
                            <div id="description">
                                Profile description
                            </div>
                            <div id="age">
                                age
                            </div>
                            <div id="location">
                                Miles from
                            </div>
                            <div id="like-container">
                                <button className="button">Like</button>
                                <button className="button">Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper">
                            <div id="pic-container">
                                <img id="pic" src="https://cdn.cnn.com/cnnnext/dam/assets/140321002327-grandma-betty-3-horizontal-large-gallery.png" />
                            </div>
                            <div id="description">
                                Profile description
                            </div>
                            <div id="age">
                                age
                            </div>
                            <div id="location">
                                Miles from
                            </div>
                            <div id="like-container">
                                <button className="button">Like</button>
                                <button className="button">Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper">
                            <div id="pic-container">
                                <img id="pic" src="https://cdn.cnn.com/cnnnext/dam/assets/140321002327-grandma-betty-3-horizontal-large-gallery.png" />
                            </div>
                            <div id="description">
                                Profile description
                            </div>
                            <div id="age">
                                age
                            </div>
                            <div id="location">
                                Miles from
                            </div>
                            <div id="like-container">
                                <button className="button">Like</button>
                                <button className="button">Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper">
                            <div id="pic-container">
                                <img id="pic" src="https://cdn.cnn.com/cnnnext/dam/assets/140321002327-grandma-betty-3-horizontal-large-gallery.png" />
                            </div>
                            <div id="description">
                                Profile description
                            </div>
                            <div id="age">
                                age
                            </div>
                            <div id="location">
                                Miles from
                            </div>
                            <div id="like-container">
                                <button className="button">Like</button>
                                <button className="button">Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper">
                            <div id="pic-container">
                                <img id="pic" src="https://cdn.cnn.com/cnnnext/dam/assets/140321002327-grandma-betty-3-horizontal-large-gallery.png" />
                            </div>
                            <div id="description">
                                Profile description
                            </div>
                            <div id="age">
                                age
                            </div>
                            <div id="location">
                                Miles from
                            </div>
                            <div id="like-container">
                                <button className="button">Like</button>
                                <button className="button">Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper">
                            <div id="pic-container">
                                <img id="pic" src="https://cdn.cnn.com/cnnnext/dam/assets/140321002327-grandma-betty-3-horizontal-large-gallery.png" />
                            </div>
                            <div id="description">
                                Profile description
                            </div>
                            <div id="age">
                                age
                            </div>
                            <div id="location">
                                Miles from
                            </div>
                            <div id="like-container">
                                <button className="button">Like</button>
                                <button className="button">Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper">
                            <div id="pic-container">
                                <img id="pic" src="https://cdn.cnn.com/cnnnext/dam/assets/140321002327-grandma-betty-3-horizontal-large-gallery.png" />
                            </div>
                            <div id="description">
                                Profile description
                            </div>
                            <div id="age">
                                age
                            </div>
                            <div id="location">
                                Miles from
                            </div>
                            <div id="like-container">
                                <button className="button">Like</button>
                                <button className="button">Dislike</button>
                            </div>
                        </div>
                        <div className="profile-wrapper">
                            <div id="pic-container">
                                <img id="pic" src="https://cdn.cnn.com/cnnnext/dam/assets/140321002327-grandma-betty-3-horizontal-large-gallery.png" />
                            </div>
                            <div id="description">
                                Profile description
                            </div>
                            <div id="age">
                                age
                            </div>
                            <div id="location">
                                Miles from
                            </div>
                            <div id="like-container">
                                <button className="button">Like</button>
                                <button className="button">Dislike</button>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <p>Footer</p>
                    </div>
                </div>
        );
    }
}