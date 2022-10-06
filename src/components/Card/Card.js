import React from 'react';
import './Card.css';
import ok from '../../images/ok.svg';

function Card({card}) {
  const [isClick, setIsClick] = React.useState(false);

  function handleCardsClick() {
    setIsClick(!isClick);
  }

  return (
    <div className='card'>
      <div className='card__image-container'><img className='card__image' src={card.image} alt='card image'/></div>
      <div className='card__info'>
        <div className='card__text-container'>
          <h2 className='card__title'>{card.name}</h2>
          <p className='card__text'>{card.text}</p>
        </div>
        <button className={isClick ? 'card__button card__button_green' : 'card__button'}
                onClick={handleCardsClick} type='button'> 
          {isClick ? <img className='card__button-img' src={ok}></img> : <p className='card__button-text'>Записаться на консультацию</p>}
        </button>
      </div>
    </div>
  );
};

export default Card;