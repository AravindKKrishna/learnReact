
import './App.css';
import { useState } from 'react';

function App() {
// const[text,setText]=useState("")
const [showtext, setShowText] = useState(false);
// const changeText=(event)=>{
//   setText(event.target.value)
// }
const changeText=()=>{
  setShowText(!showtext)
}
  return (
    <>
    {/* <input type="text" onChange={changeText} palceholder="name"/> */}
    {/* {text} */}

    {/* onclick state change */}
<button onClick={changeText}>show/hide</button>
{showtext&& <h1>Hi My name is AK</h1>}

    </>
  
  )

}


export default App;



