
import './App.css';

import Axios from "axios"
import { useState ,useEffect } from 'react';


function App() {
const [name,setName]=useState("")
const [predictAge, setPredictAge] = useState({});
const fetchData=()=>{
Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  setPredictAge(res.data);
});
}


https: return (
  <>
    <input
      placeholder=" Name to fetch data"
      onChange={(event) => {
        setName(event.target.value);
      }}
    />
    <button onClick={fetchData}>Predict Age</button>
    <h1>Predicted Name: {predictAge?.name} </h1>
    <h1>Predicted Age: {predictAge?.age} </h1>
    <h1>Predicted Count: {predictAge?.count} </h1>
  </>
);
}


export default App;



