import cuid from "cuid";
export const cuidFn = cuid;

export default function manageReview(
  state = {
    reviews: []
  },
  action
) {
  switch (action.type) {
    case "ADD_REVIEW":
      const review = {
        text: action.payload.text,
        id: cuid(),
        restaurantId: action.payload.restaurantId
      };
      return { reviews: state.reviews.concat(review) };
    case "DELETE_REVIEW":
      return {
        reviews: state.reviews.filter(review => review.id !== action.id)
      };
    case "DELETE_RESTAURANT":
      return {
        reviews: state.reviews.filter(
          review => review.restaurantId !== action.id
        )
      };
    default:
      return state;
  }
}
