
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

const key = require('../config/keys');
const stripe = require('stripe'(keys.stripeSecretKey));
const requireLogin = require("../middlewares/requireLogin");

//create an arrow function and immediately export it
//apply charge
module.exports = app => {
  //set the route handler
  //passed the request handler (arrow function that gets called with req, res)
    //check if the user is logged in before we attempt to bill
  app.post("/api/stripe", requireLogin, async (req, res) => {


    //charge the credit card
    //stripe library
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });

    //successfully charge the user
    //save to database
    //req.user is wired up by our passport by the initialize and session in the index.js
    req.user.credits += 5;
    const user = await req.user.save(); //return the updated user model
    //    console.log(charge);

    //send back to whoever made the request
    res.send(user);
  });
};
