import React from 'react';

function Login() {
  return (
    <div className="sign-form">
    <a href="#" className="close close--white">
      <span className="visually-hidden">Закрыть форму авторизации</span>
    </a>
    <div className="sign-form__title">
      <h1 className="title title--small">Авторизуйтесь на сайте</h1>
    </div>
    <form action="test.html" method="post">
      <div className="sign-form__input">
        <label className="input">
          <span>E-mail</span>
          <input type="email" name="email" placeholder="example@mail.ru" />
        </label>
      </div>

      <div className="sign-form__input">
        <label className="input">
          <span>Пароль</span>
          <input type="password" name="pass" placeholder="***********" />
        </label>
      </div>
      <button type="submit" className="button">Авторизоваться</button>
    </form>
  </div>
  );
}

export default Login;