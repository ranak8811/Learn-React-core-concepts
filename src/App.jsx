import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import Bookstore from "./Bookstore";

function App() {
  const actors = ["Email", "Twitter", "facebook", "instagram"];
  const singers = [
    { id: 1, name: "Apple", age: 36 },
    { id: 2, name: "banana", age: 32 },
    { id: 3, name: "water-melon", age: 21 },
    { id: 4, name: "Guava", age: 12 },
  ];

  const books = [
    { id: 1, name: "Physics", price: 123 },
    { id: 2, name: "Chemistry", price: 234 },
    { id: 3, name: "Math", price: 453 },
    { id: 4, name: "Biology", price: 132 },
  ];
  return (
    <>
      <h1>Vite + React</h1>

      <Bookstore books={books}></Bookstore>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
      <Actor name={"John"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn JSX" isDone={false}></Todo>
      <Todo task="Learn React concepts" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="455"></Device>
      <Device name="mobile" price="44"></Device>
      <Device name="watch" price="23"></Device>
      <Perosn></Perosn>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  console.log(props);
  return (
    <h2>
      This Device: {props.name} -- price: {props.price}
    </h2>
  );
}

function Perosn() {
  const age = 23;
  return <h3>I am {age} years old</h3>;
}

function Student() {
  return (
    <div className="student">
      <h1>hey</h1>
      <p>how are you</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "10px",
    padding: "10px",
    border: "1px solid green",
    borderRadius: "20px",
  };

  return (
    <div style={developerStyle}>
      <h5>Dev </h5>
      <h2>i wanna be</h2>
    </div>
  );
}

export default App;
