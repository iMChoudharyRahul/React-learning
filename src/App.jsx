import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './BasicLayout/header/Header';
import Footer from './BasicLayout/footer/Footer';
import LeftAside from './BasicLayout/manubar/LeftAside';
import RightAside from './BasicLayout/manubar/RightAside';
import Home from './components/Home/Home';
import StatePrev from './FunctionComp/Hooks/useRef/StatePrev';

function App() {

  return (
    <>
    <div className="main-container">
    <Router>
      <Header />
      <div className="main-content">
        <LeftAside />
     <div className='list-item'>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ref" element={<StatePrev />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
       </Routes>
     </div>
     <RightAside/>
     </div>
     <Footer />
    </Router>
    </div>
    </>
  )
}

export default App
