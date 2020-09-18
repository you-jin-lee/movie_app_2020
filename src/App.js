import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "peanut butter jelly",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Peanut-Butter-Jelly-Sandwich.png/255px-Peanut-Butter-Jelly-Sandwich.png",
  },
  {
    id: 2,
    name: "chocolate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chocolate_%28blue_background%29.jpg/200px-Chocolate_%28blue_background%29.jpg",
  },
  {
    id: 3,
    name: "sour candy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sour-Patch-Kids.jpg/220px-Sour-Patch-Kids.jpg",
  },
  {
    id: 4,
    name: "sandwich",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Egg_Sandwich.jpg/220px-Egg_Sandwich.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
