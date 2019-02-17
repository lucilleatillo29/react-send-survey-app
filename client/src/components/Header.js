import React, { Component } from "react";
import { connect } from "react-redux";

////import Link property of react-router-dom
import { Link } from "react-router-dom";

//import Payments module/class
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    //user current state
    //being produced by our authreducer.js
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
      //return an array of elements
      //everytime we return an array in renderContent method and reacts 
      //thinks it is a list and we are required to put a key
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper #455a64 blue-grey darken-2">
        {/* if the user is logged in (which means this.props.auth is true) mapped the Link to "/" */}
        {/* Provides declarative, accessible navigation around your application. */}
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          {/* renderContent ia a method that holds the passed property and display it in render */}
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

//we use export default connect to connect our components to redux store
//you can not connect/interact your component without the connect method of redux.
export default connect(mapStateToProps)(Header);
