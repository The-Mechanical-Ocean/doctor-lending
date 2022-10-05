import React from 'react';
import './Inovation.css';
import cross from '../../images/Inovation__cross.svg';
import kover from '../../images/Inovation__kovrik.svg';
import gearl from '../../images/Inovation__gearl.svg';

function Inovation() {  
  return (  
    <section className='inovation' id='inovation'>
      <div className='inovation__container-big'><p className='inovation__text-big'>Центр доктора Лабунца- представляет инновационную запатентованную систему лечебной физкультуры премиум класса . 
        Симбиоз новейших достижений в сфере фитнесса и глубоких знаний медицины направленный на безмедикаментозное лечение, как болезней опорно-двигательного аппарата так и сопутствующей патологии.В чем секрет методики? Все просто:</p>  
      </div>
      <div className='inovation__container-m'>
        <p className='inovation__text'>Адаптированные для людей имеющих проблемы со здоровьем самые популярные групповые программы: кросфит, степ-аэробика, боди-памп, йога, пилатэс и т.д.</p>  
        <img className='inovation__tex-image' src={kover} alt='image'/>
      </div>
      <div className='inovation__container-m'>
        <p className='inovation__text'>Иновационный подход к лечению направленный на самовосстановление человеческого организма без применения вредных лекарственных препаратов, оперативного лечения, а так же различных ортопедических протезов- корсетов, поясов и т.п.</p> 
        <img className='inovation__tex-image' src={cross} alt='image'/>
      </div>
      <div className='inovation__container-s'>
        <p className='inovation__text'>Специально разработанные водные программы для людей имеющих проблемы со здоровьем </p>
      </div>
      <div className='inovation__container-s'>
        <p className='inovation__text'>Саунатерапия, как способ лечения и востановления человечесеского органзма от болезней</p>  
      </div>
      <div className='inovation__container-s'>
        <p className='inovation__text'>Лучшее оборудование- спортивные и реабилитационные тренажеры(кинезиотерапия, ранее известная, как механотерпия)</p>
      </div>  
      <div className='inovation__container-big'>
        <p className='inovation__text'>Специальные медицинские групповые программы 
          направленные на излечение тех или иных недугов
          (гимнастика для восстановления шейного и поясничного отделов позвоночника, лечение 
          суставов и других проблем опорно-двигательного аппарата)</p> 
          <img className='inovation__tex-image' src={gearl} alt='image'/>
      </div> 
    </section>
  );
};

export default Inovation;