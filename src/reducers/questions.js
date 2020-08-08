const initialState = [];

function questions(state = initialState, action) {
  switch (action.type) {
    case "ADD_QUESTION":
      return [...state, ...action.payload.questions];

    default:
      return state;
  }
}

export default questions;
