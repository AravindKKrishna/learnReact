
import './App.css';
import  {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

import Axios from "axios"
import { useState ,useEffect } from 'react';
import Home from './Pages/Home';
import Menu from './Pages/Menu';


function App() {



https: return (
  <>
    <Router>
      <div>
        NAVBAR
        {/* we can link the pages component to a name similar to <a></a> tag in html thus we can simply route in the body part */}

        <Link to={"/home"}>Home</Link>
        <Link to={"/menu"}>Menu</Link>
      
      </div>
      <Routes>
        {/* Here we create routes and link the componenet pages.This can only be accesed through changing the root in browser */}
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  </>
);
}


export default App;



