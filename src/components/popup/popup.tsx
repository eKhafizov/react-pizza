import React from 'react';

function popup() {
  return (
    <div className="popup">
      <a href="#" className="close">
        <span className="visually-hidden">Закрыть попап</span>
      </a>
      <div className="popup__title">
        <h2 className="title">Спасибо за заказ</h2>
      </div>
      <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;) </p>
      <div className="popup__button">
        <a href="#" className="button">Отлично, я жду!</a>
      </div>
    </div>
  );
}

export default popup;