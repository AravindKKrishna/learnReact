
import './App.css';
import { useState ,useEffect } from 'react';

function App() {
const[count,setCount]=useState(0)
useEffect(() => {
  console.log("mounting");
  return ()=>{
    console.log("unmounting");
    
  }
},[]);
 const changeCount=()=>{
  setCount(count+1)
 }

  return (
    <>
      <button onClick={changeCount}>clickme</button>
      {count}
    </>
  );
}


export default App;



