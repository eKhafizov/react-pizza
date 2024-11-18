import React from 'react';

function Cabinet() {
  return (
    <main className="layout">
    <div className="layout__sidebar sidebar">
      <a href="index.html" className="logo layout__logo">
        <img src="img/logo.svg" alt="Pizza logo" width="90" height="40" />
      </a>
      <a className="layout__link" href="#">История заказов</a>
      <a className="layout__link layout__link--active" href="#">Мои данные</a>
    </div>

    <div className="layout__content">
      <div className="layout__title">
        <h1 className="title title--big">Мои данные</h1>
      </div>

      <div className="user">
        <picture>
          <source type="image/webp" srcSet="img/users/user5@2x.webp 1x, img/users/user5@4x.webp 2x" /> 
          <img src="img/users/user5@2x.jpg" srcSet="img/users/user5@4x.jpg" alt="Василий Ложкин" width="72" height="72"/>
        </picture>
        <div className="user__name">
          <span>Василий Ложкин</span>
        </div>
        <p className="user__phone">Контактный телефон: <span>+7 999-999-99-99</span></p>
      </div>

      <div className="layout__address">
        <div className="sheet address-form">
          <div className="address-form__header">
            <b>Адрес №1. Тест</b>
            <div className="address-form__edit">
              <button type="button" className="icon"><span className="visually-hidden">Изменить адрес</span></button>
            </div>
          </div>
          <p>Невский пр., д. 22, кв. 46</p>
          <small>Позвоните, пожалуйста, от проходной</small>
        </div>
      </div>

      <div className="layout__address">
        <form action="test.html" method="post" className="address-form address-form--opened sheet">
          <div className="address-form__header">
            <b>Адрес №1</b>
          </div>

          <div className="address-form__wrapper">
            <div className="address-form__input">
              <label className="input">
                <span>Название адреса*</span>
                <input type="text" name="addr-name" placeholder="Введите название адреса" />
              </label>
            </div>
            <div className="address-form__input address-form__input--size--normal">
              <label className="input">
                <span>Улица*</span>
                <input type="text" name="addr-street" placeholder="Введите название улицы" />
              </label>
            </div>
            <div className="address-form__input address-form__input--size--small">
              <label className="input">
                <span>Дом*</span>
                <input type="text" name="addr-house" placeholder="Введите номер дома" />
              </label>
            </div>
            <div className="address-form__input address-form__input--size--small">
              <label className="input">
                <span>Квартира</span>
                <input type="text" name="addr-apartment" placeholder="Введите № квартиры"/>
              </label>
            </div>
            <div className="address-form__input">
              <label className="input">
                <span>Комментарий</span>
                <input type="text" name="addr-comment" placeholder="Введите комментарий"/>
              </label>
            </div>
          </div>

          <div className="address-form__buttons">
            <button type="button" className="button button--transparent">Удалить</button>
            <button type="submit" className="button">Сохранить</button>
          </div>
        </form>
      </div>

      <div className="layout__button">
        <button type="button" className="button button--border">Добавить новый адрес</button>
      </div>
    </div>
  </main>
  );
}

export default Cabinet;