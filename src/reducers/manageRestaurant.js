import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurant(
  state = {
    restaurants: []
  },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.text, id: cuid() };
      return { restaurants: state.restaurants.concat(restaurant) };
    case "DELETE_RESTAURANT":
      return {
        restaurants: state.restaurants.filter(
          restaurant => restaurant.id !== action.id
        )
      };
    default:
      return state;
  }
}
