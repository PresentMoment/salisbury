import React from 'react';
import './App.css';

let images = [];

for (var i=0; i < 35; i++){
  images.push(`images/${i}.png`)
}
console.log(images)

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(images);
console.log(images)

function App() {
  return (
    <div className="App">
      <section id="photos">

      {images.map((source) => (
        <img src={source} alt={source} key={source} />
        ))}
        </section>
    </div>
  );
}

export default App;
