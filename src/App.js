
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home.js'
import Banner from './Banner.js';
import Sectiontwo from './section2.js'
import Footer from './footer.js'

function App() {



  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/banner' element={<Banner/>}></Route>
        <Route path='/section2' element={<Sectiontwo/>}></Route>
    <Route path='/footer' element={<Footer/>}></Route>
      </Routes>
     </Router>
    </>
  );
};

export default App;
