//to allow in render async requests.
//to access the common JSON Placeholder API within a React application
import axios from "axios";
import { FETCH_USER } from "./types";

//export const so we can import it either with 
//async dispatch - sends data from your application to your store
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

//token that is what we got by from our api
//pass the result to the dispatch()
export const handleToken = token => async dispatch => {
  
  //to send some information along with our request to the backend
  //route handler called /api/stripe
  //response to this post request is the updated user model with the updated user credits
  const res = await axios.post("/api/stripe", token);

  //when our request is success and sends back the current user model with the updated credits of the user
  dispatch({ type: FETCH_USER, payload: res.data });
};
