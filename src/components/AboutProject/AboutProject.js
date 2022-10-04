import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about" id='about'>
      <div className='about__info-container'>
        <h2 class="about__title">ЦЕНТР ДОКТОРА ЛАБУНЦА</h2>
        <p className='about__text'>лечение и профилактика заболеваний опорно-двигательного аппарата </p>
        <p className='about__text'>ИЗБАВЬСЯ ОТ БОЛИ В СПИНЕ И СУСТАВАХ</p>
      <button className='about__button'><p className='button__text'>Записаться на консультацию</p></button>
      </div>   
      <div className='about__foto'></div>
    </section>
  );
};

export default AboutProject;

