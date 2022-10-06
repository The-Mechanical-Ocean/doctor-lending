import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
      <Routes>
        {/* <Route path='/' element={<Main />}/>
        <Route path='/signup' element={<Register />}/>
        <Route path='/signin' element={<Login />}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/saved-movies' element={<SavedMovies/>}/>
        <Route path='/profile' element={<Profile name={'Александр'} email={'pochta@yandex.ru'}/>}/>
        <Route path='*' element={<PageNotFound/>}/> */}
      </Routes>  
      <Footer />      
    </div>
  )
}

export default App;