
import './App.css';

import Axios from "axios"
import { useState ,useEffect } from 'react';


function App() {
const[excuse,setExcuse]=useState("")


const Fetchexcuse=(excuse)=>{
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
    (res) => {
      setExcuse(res.data[0].excuse);
    }
  );
}



https: return (
  <>
    <h1>Generate an Excuse</h1>
    <button onClick={()=>Fetchexcuse("party")}>Party</button>
    <button onClick={()=>Fetchexcuse("family")}>Family</button>
    <button onClick={()=>Fetchexcuse("office")}>office</button>

   <p>{excuse}</p>
  </>
);
}


export default App;



