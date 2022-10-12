import React from 'react';
import './Problem.css';
import CardProblem from '../CardProblem/CardProblem'
import cards from '../../utils/cards-problem';

function Problem() {  
  const [ index, setIndex ] = React.useState(0)
  const [width, setWidth] = React.useState(window.innerWidth);

  return (  
    <section className='problem' id='problem'>
      <div className='problem__container'>  
      <div className='problem__title-container'><h3 className='problem__title'>ПРОБЛЕМЫ С КОТОРЫМИ УСПЕШНО БОРЮТСЯ В НАШЕМ ЦЕНТРЕ</h3></div>
      <div className='problem__nav'>  
        {cards.map ((card, cardI) => {
          return <button className={index === cardI ? 'problem__button problem__button-gradient' : 'problem__button'}
                         onClick={() => setIndex(cardI)}
                         key={card.textButton}
                         >{card.textButton}</button>
        })} 
      </div>
      <CardProblem card={cards[index]}/>  
      </div>
    </section>
  );
};

export default Problem;