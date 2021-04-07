const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));