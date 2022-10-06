import React from 'react';
import './Problem.css';
import CardProblem from '../CardProblem/CardProblem'
import cards from '../../utils/cards-problem';

function Problem() {  
  const [isClick, setIsClick] = React.useState(false);
  
  function handleClick() { 
    setIsClick(!isClick);
  }
  
  return (  
    <section className='problem' id='problem'>
      <div className='problem__container'>  
      <div className='problem__title-container'><h3 class='problem__title'>ПРОБЛЕМЫ С КОТОРЫМИ УСПЕШНО БОРЮТСЯ В НАШЕМ ЦЕНТРЕ</h3></div>
      <div className='problem__nav'>  
        <button className = {isClick ? 'problem__button problem__button-gradient' : 'problem__button'}
                onClick={handleClick} type  ='button'>ЛЕЧЕБНЫЕ ПРОГРАММЫ</button>
        <button className = {isClick ? 'problem__button problem__button-gradient' : 'problem__button'}
                onClick={handleClick} type='button'>РЕАБИЛИТАЦИОННЫЕ ПРОГРАММЫ</button>
        <button className = {isClick ? 'problem__button problem__button-gradient' : 'problem__button'}
                onClick={handleClick} type='button'>КОРРЕКЦИОННЫЕ ПРОГРАММЫ</button>
      </div>
      {cards.map ((card) => (<CardProblem key={card.id} card={card}/>))}  
      </div>
    </section>
  );
};

export default Problem;