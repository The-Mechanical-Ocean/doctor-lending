import React from 'react';
import './Privilege.css';
import Card from '../Card/Card';
import cards from '../../utils/cards';

function Privilege() {
  const [index, setIndex] = React.useState(0);

  return (
    <section className="privilege" id="privilege">
      <div className="privilege__container">
        <div className="privilege__title-container">
          <h3 className="privilege__title">ПРЕИМУЩЕСТВА</h3>
        </div>
        <div className="privilege__nav">
          {cards.map((card, cardId) => {
            return (
              <button
                className={
                  index === cardId
                    ? 'privilege__button privilege__button-gradient'
                    : 'privilege__button'
                }
                onClick={() => setIndex(cardId)}
                key={cardId}
              >
                {card.textButton}
              </button>
            );
          })}
        </div>
        {<Card card={cards[index]} />}
      </div>
    </section>
  );
}

export default Privilege;
