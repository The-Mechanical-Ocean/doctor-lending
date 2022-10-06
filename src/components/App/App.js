import React from 'react';
import './App.css';
import Header from '../Header/Header';
import AboutProject from '../AboutProject/AboutProject';
import Privilege from '../Privilege/Privilege';
import Problem from '../Problem/Problem';
import Inovation from '../Inovation/Inovation';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <AboutProject />
      <Privilege />
      <Problem />
      <Inovation />
      <Footer />      
    </div>
  )
}

export default App;