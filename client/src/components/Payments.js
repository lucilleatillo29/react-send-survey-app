//Section 8 Lecture 93
//import react so we can use it's library and define a React component class
import React, { Component } from "react";

//import react-stripe-checkout library or plugin that we are going to use to show our user a credit card form
import StripeCheckout from "react-stripe-checkout";

//import connect property of react redux
import { connect } from "react-redux";

//import all functions from ./../actions
import * as actions from "./../actions";

//Instead of using a method from the react library, we extend an ES6 class that the library defines, Component.
//instead of using React.createClass we can use instead extends Component when creating a class
class Payments extends Component {
  //what we want to see on the screen
  render() {
    //StripCheckout component
    return (

      //we will return our StripeCheckout component
      <StripeCheckout
        name="Emaily" //accepts name property
        description="$5 for 5 email credits" //accepts descrtiption propeerty
        
        //required configuration options that we need to handle StripeCheckout to get the results what we expect
        //credits: StripeCheckout defaults $cents
        amount={500}

        //very poorly named token
        //expecting to received callback function and that callback function will be called after we successfully retrieved a authorization token from the stripe api
        //token={token => console.log(token)}
        token={token => this.props.handleToken(token)}

        //this is the stripe published key that we added in our env variables
        //the value of this environment variable is injected when our react application is build by our create react app
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >      
       {/* //passed custom element to use as a representation of that button
      //pass an element to the StripeCheckout component as a child component
      //classname 'btn' means use a button from the material design UI package */}
        <button className="btn #f44336 red">Add Credits</button>
      </StripeCheckout>
    );
  }
}

//we use export default connect to connect our components to redux store   
//you can not connect/interact your component without the connect method of redux. 
export default connect( //connect helper
  null, //no mapStateToProps functions
  actions
)(Payments);
