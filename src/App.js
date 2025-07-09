
import './App.css';
import Axios from "axios"
import { useState ,useEffect } from 'react';

//if we use axios it will keep fetching data everytime when a component renders thus it become an infinite loop.
// so to avoid that we use  useEffect and put the axios code in useEffect

function App() {
  // //using fetch
  // fetch("https://catfact.ninja/fact")
  //   .then((res)=>res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  const [catFact, setcatFact] = useState("");
// useEffect(()=>{
//   //using Axios Library
//   Axios.get("https://catfact.ninja/fact").then((res) => {
//     setcatFact(res.data.fact);
//   });
// },[])


//this represt how an api is called while clicking button and here we use useEffect to display the button function and it helps to prevent the infinite loop 
useEffect(()=>{
  fetchCatFact()
},[])

const fetchCatFact=()=>{
  Axios.get("https://catfact.ninja/fact").then((res) => {
       setcatFact(res.data.fact);
       });
}

  return (
    <>
    <button onClick={fetchCatFact}>Generate cat fact</button>
    <p>{catFact}</p>
    </>
  );
}


export default App;



