export const addData = (item) => ({
  type: "ADD_DATA",
  payload: {
    audio: item.audio,
    description: item.description,
    id: item.id,
    image: item.image,
    name: item.name,
    species: item.species,
  },
});
export const addQuestions = (questions) => ({
  type: "ADD_QUESTION",
  payload: {
    questions,
  },
});
