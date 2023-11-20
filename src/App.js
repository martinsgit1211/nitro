
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home.js'
import Banner from './Banner.js';

function App() {



  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/banner' element={<Banner/>}></Route>
      </Routes>
     </Router>
    </>
  );
};

export default App;
