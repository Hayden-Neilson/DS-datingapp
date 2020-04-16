import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="page-container">
        <div className="form-group">
          <input type="text" id="fullName" placeholder="Your name"></input>
          <label for="fullName"></label>
        </div>
        <div className="form-group">
          <input type="email" id="email" placeholder="Your email"></input>
          <label for="email"></label>
        </div>

        <div className="form-group2">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <label for="message"></label>
        </div>

        <div className="center-btn-wrapper">
          <button type="submit" class="btn">
            Send
          </button>
        </div>
      </div>
    );
  }
}
