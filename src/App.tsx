import React from 'react';
import './App.css';


let anyName : unknown; //It will take any value
let name:string;
let age:number | string;
let isStudent:boolean;
let hobbies: string[];
let role:[number, string];

type Person ={
  name:string,
  age?:number
}

let person: Person={
  name:"khairul"
};

let printname: (name:string)=>void;

// function printname(name:string){
//   console.log(name)
// }

// printname("khairul");



function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
