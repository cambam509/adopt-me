import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet.js';

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Taco",
      animal: "Dog",
      breed: "Chihuhua",
    }),
    React.createElement(Pet, {
      name: "Loki",
      animal: "Dog",
      breed: "Chihuhua",
    }),
    React.createElement(Pet, {
      name: "Scully",
      animal: "Cat",
      breed: "Evil",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));