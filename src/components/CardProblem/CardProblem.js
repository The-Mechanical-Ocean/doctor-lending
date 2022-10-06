import React from 'react';
import './CardProblem.css';
import galka from '../../images/CardProblemGalka.svg';

function Card({card}) {
  return (
    <div className='card-problem'>
      <ul className='card-problem__ul'>
        <li><div className='card-problem__text-container'><img className='card-problem__text-image' src={galka} alt='card image'/><p className='card-problem__text'>{card.text1}</p></div></li>
        <li><div className='card-problem__text-container'><img className='card-problem__text-image' src={galka} alt='card image'/><p className='card-problem__text'>{card.text2}</p></div></li>
        <li><div className='card-problem__text-container'><img className='card-problem__text-image' src={galka} alt='card image'/><p className='card-problem__text'>{card.text3}</p></div></li>
        <li><div className='card-problem__text-container'><img className='card-problem__text-image' src={galka} alt='card image'/><p className='card-problem__text'>{card.text4}</p></div></li>
      </ul>
      <div className='card-problem__image-container'><img className='card-problem__image' src={card.image} alt='card image'/></div>
    </div>
  );
};

export default Card;