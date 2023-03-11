import React from 'react';
import './Card.css';

const PHONE_NUMBER = '+79160978804';
const MESSAGE = 'Добрый день, можно консультацию';

function Card({ card }) {
  const [isClick, setIsClick] = React.useState(false);

  return (
    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src={card.image} alt="card image" />
      </div>
      <div className="card__info">
        <div className="card__text-container">
          <h2 className="card__title">{card.name}</h2>
          <p className="card__text">{card.text}</p>
        </div>
        <a
          className={isClick ? 'card__href card__href_green' : 'card__href'}
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
            MESSAGE
          )}`}
          target="_blank"
          onClick={() => setIsClick(!isClick)}
        >
          {isClick ? (
            <p className="about__href-text">Уже записались?</p>
          ) : (
            <p className="card__href-text">Записаться на консультацию</p>
          )}
        </a>
      </div>
    </div>
  );
}

export default Card;
