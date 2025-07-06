
import './App.css';
// import { useState } from 'react';

function App() {
 
 
  return (
    <>
      <Job name="Ak" age={21} email="ak@gmail.com" />
      <Job name="Ara" age={21} email="ara@gmail.com" />
      <Job name="AK" age={21} email="aK@gmail.com" />
    </>
  );
}

export default App;


const Job = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </>
  );
}


