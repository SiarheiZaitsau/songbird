import React, { useEffect, useState } from "react";
import birdsData from "./data";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { addData, addQuestions } from "./actions/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  let questions = useSelector((state) => state.questions);
  let getRandomElementsFromArray = (numOfEl, arr) => {
    const questions = [];
    while (questions.length < numOfEl) {
      let index = Math.floor(Math.random() * arr.length);
      if (questions.indexOf(arr[index]) === -1) {
        questions.push(arr[index]);
      }
    }
    return questions;
  };
  let getRandomValuesFromArray = (numOfEl, arr, answer) => {
    const questions = [];
    questions.push(answer);
    while (questions.length < numOfEl) {
      let index = Math.floor(Math.random() * arr.length);
      if (questions.indexOf(arr[index].name) === -1) {
        questions.push(arr[index].name);
      }
    }
    return questions;
  };
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
    const questions = getRandomElementsFromArray(6, newIdsData);
    // dispatch(addQuestions(questions));
    let questionsWithOptions = questions.map((que) => {
      return {
        audio: que.audio,
        description: que.description,
        id: que.id,
        image: que.image,
        name: que.name,
        species: que.species,
        options: getRandomValuesFromArray(6, newIdsData, que.name),
      };
    });
    dispatch(addQuestions(questionsWithOptions));
  }, []);

  return <div className="App">123dasdas</div>;
}

export default App;
