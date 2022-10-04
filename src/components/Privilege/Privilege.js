import React from 'react';
import './Privilege.css';
import card from '../../utils/cards'
import Card from '../Card/Card'
import cards from '../../utils/cards';

function Privilege() {  
  const [isClick, setIsClick] = React.useState(false);
  
  function handleClick() { 
      setIsClick(!isClick);
    
  }
  return (  
    <section className='privilege' id='privilege'>
      <div className='privilege__container'>  
      <div className='privilege__title-container'><h3 class='privilege__title'>ПРЕИМУЩЕСТВА</h3></div>
      <div className='privilege__nav'>  
        <button className = {isClick ? 'privilege__button privilege__button-gradient' : 'privilege__button'}
                onClick={handleClick} type  ='button'>Революционный подход в фитнес индустрии</button>
        <button className = {isClick ? 'privilege__button privilege__button-gradient' : 'privilege__button'}
                onClick={handleClick} type='button'>Уникальная система диагностики</button>
        <button className = {isClick ? 'privilege__button privilege__button-gradient' : 'privilege__button'}
                onClick={handleClick} type='button'>Поэтапная система реабилитации и тренировок</button>
        <button className = {isClick ? 'privilege__button privilege__button-gradient' : 'privilege__button'}
                onClick={handleClick} type='button'>Подход, ориентированный на результат</button>
        <button className = {isClick ? 'privilege__button privilege__button-gradient' : 'privilege__button'}
                onClick={handleClick} type='button'>Физическая активность, как основа здорового образа жизни</button>
        <button className = {isClick ? 'privilege__button privilege__button-gradient' : 'privilege__button'}
                onClick={handleClick} type='button'>Быстрый и стабильный эффект</button>
      </div>
      {cards.map ((card) => (<Card key={card.id} card={card}/>))}  
      </div>
    </section>
  );
};

export default Privilege;