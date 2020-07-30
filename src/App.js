import React, { useEffect } from "react";
import birdsData from "./data";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { addData } from "./actions/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let newData = [].concat(...birdsData);
    let newIdsData = newData.map((bird) => {
      return {
        audio: bird.audio,
        description: bird.description,
        id: uuidv4(),
        image: bird.image,
        name: bird.name,
        species: bird.species,
      };
    });
    newIdsData.forEach((item) => {
      dispatch(addData(item));
    });
  });

  return <div className="App">123dasdas</div>;
}

export default App;
