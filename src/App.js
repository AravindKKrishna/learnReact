
import './App.css';
// import { useState } from 'react';

function App() {
  // const age = 15;
  // const isGreen=true
//  List in react
const users=[
  {
name:"Ak",
age:"22"
},
{
  name:"Av",
  age:"22"
  }
]

  return (
    
    <>
    {/* We study conditional rendering with ternary operators */}
     {/* {
    age > 18 ? <h1>Over age</h1> : <h1>under age</h1>
  }
  <h1 style={{color: isGreen? "green":"red" }}>This has color</h1>

  {isGreen && <button>This is a button</button>}



  
  */}
    




   { users.map((user,key)=>{
  return(
<User name={user.name} age={user.age}/>

  )
})
}
    </>
  );
}


const User = (props) => {
  return (
    <div>
      {props.name}
       {props.age}
    </div>
  );
}





export default App;



