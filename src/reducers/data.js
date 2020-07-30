const initialState = [];

function data(state = initialState, action) {
  switch (action.type) {
    case "ADD_DATA":
      return [
        ...state,
        {
          audio: action.payload.audio,
          description: action.payload.description,
          id: action.payload.id,
          image: action.payload.image,
          name: action.payload.name,
          species: action.payload.species,
        },
      ];

    default:
      return state;
  }
}

export default data;
