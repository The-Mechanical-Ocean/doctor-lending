import React from 'react';
import './AboutProject.css';
import aboutimage from '../../images/About__project-foto.png';

const PHONE_NUMBER = '+79160978804';
const MESSAGE = 'Добрый день, можно консультацию';

function AboutProject() {
  const [isClick, setIsClick] = React.useState(false);

  return (
    <section className="about" id="about">
      <div className="about__info-container">
        <h2 className="about__title">ЦЕНТР ДОКТОРА ЛАБУНЦА</h2>
        <p className="about__text">
          лечение и профилактика заболеваний опорно-двигательного аппарата{' '}
        </p>
        <p className="about__text">ИЗБАВЬСЯ ОТ БОЛИ В СПИНЕ И СУСТАВАХ</p>
        <a
          className="about__href"
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
            MESSAGE
          )}`}
          target="_blank"
          onClick={() => {
            setIsClick(!isClick);
          }}
          rel="noreferrer"
        >
          {isClick ? (
            <p className="about__href-text">Уже записались?</p>
          ) : (
            <p className="about__href-text">Записаться на консультацию</p>
          )}
        </a>
      </div>
      <img className="about__foto" src={aboutimage} alt="about image" />
    </section>
  );
}

export default AboutProject;
