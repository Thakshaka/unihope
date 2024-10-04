import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App(){
  return (
  
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
   
  )
}

export default App;