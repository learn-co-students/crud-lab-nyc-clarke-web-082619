import { combineReducers } from "redux";
import manageRestaurant from "./manageRestaurant";
import manageReview from "./manageReview";

export default combineReducers({
  manageRestaurant,
  manageReview
});
