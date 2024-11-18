export default function Home() {

return (
    <form action="test.html" method="post" className="layout-form">
    <main className="content cart">
      <div className="container">
        <div className="cart__title">
          <h1 className="title title--big">Корзина</h1>
        </div>

        {/* <!-- <div className="sheet cart__empty">
          <p>В корзине нет ни одного товара</p>
        </div> --> */}

        <ul className="cart-list sheet">
          <li className="cart-list__item">
            <div className="product cart-list__product">
              <img src="../../img/product.svg" className="product__img" width="56" height="56" alt="Капричоза"/>
              <div className="product__text">
                <h2>Капричоза</h2>
                <ul>
                  <li>30 см, на тонком тесте</li>
                  <li>Соус: томатный</li>
                  <li>Начинка: грибы, лук, ветчина, пармезан, ананас</li>
                </ul>
              </div>
            </div>

            <div className="counter cart-list__counter">
              <button type="button" className="counter__button counter__button--minus">
                <span className="visually-hidden">Меньше</span>
              </button>
              <input type="text" name="counter" className="counter__input" value="1"/>
              <button type="button" className="counter__button counter__button--plus counter__button--orange">
                <span className="visually-hidden">Больше</span>
              </button>
            </div>

            <div className="cart-list__price">
              <b>782 ₽</b>
            </div>

            <div className="cart-list__button">
              <button type="button" className="cart-list__edit">Изменить</button>
            </div>
          </li>
          <li className="cart-list__item">
            <div className="product cart-list__product">
              <img src="img/product.svg" className="product__img" width="56" height="56" alt="Любимая пицца"/>
              <div className="product__text">
                <h2>Любимая пицца</h2>
                <ul>
                  <li>30 см, на тонком тесте</li>
                  <li>Соус: томатный</li>
                  <li>Начинка: грибы, лук, ветчина, пармезан, ананас, бекон, блю чиз</li>
                </ul>
              </div>
            </div>

            <div className="counter cart-list__counter">
              <button type="button" className="counter__button counter__button--minus">
                <span className="visually-hidden">Меньше</span>
              </button>
              <input type="text" name="counter" className="counter__input" value="2"/>
              <button type="button" className="counter__button counter__button--plus counter__button--orange">
                <span className="visually-hidden">Больше</span>
              </button>
            </div>

            <div className="cart-list__price">
              <b>782 ₽</b>
            </div>

            <div className="cart-list__button">
              <button type="button" className="cart-list__edit">Изменить</button>
            </div>
          </li>
        </ul>

        <div className="cart__additional">
          <ul className="additional-list">
            <li className="additional-list__item sheet">
              <p className="additional-list__description">
                <img src="img/cola.svg" width="39" height="60" alt="Coca-Cola 0,5 литра"/>
                <span>Coca-Cola 0,5 литра</span>
              </p>

              <div className="additional-list__wrapper">
                <div className="counter additional-list__counter">
                  <button type="button" className="counter__button counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="2"/>
                  <button type="button" className="counter__button counter__button--plus counter__button--orange">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>

                <div className="additional-list__price">
                  <b>× 56 ₽</b>
                </div>
              </div>
            </li>
            <li className="additional-list__item sheet">
              <p className="additional-list__description">
                <img src="img/sauce.svg" width="39" height="60" alt="Острый соус"/>
                <span>Острый соус</span>
              </p>

              <div className="additional-list__wrapper">
                <div className="counter additional-list__counter">
                  <button type="button" className="counter__button counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="2"/>
                  <button type="button" className="counter__button counter__button--plus counter__button--orange">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>

                <div className="additional-list__price">
                  <b>× 30 ₽</b>
                </div>
              </div>
            </li>
            <li className="additional-list__item sheet">
              <p className="additional-list__description">
                <img src="img/potato.svg" width="39" height="60" alt="Картошка из печи"/>
                <span>Картошка из печи</span>
              </p>

              <div className="additional-list__wrapper">
                <div className="counter additional-list__counter">
                  <button type="button" className="counter__button counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="2"/>
                  <button type="button" className="counter__button counter__button--plus counter__button--orange">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>

                <div className="additional-list__price">
                  <b>× 56 ₽</b>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="cart__form">
          <div className="cart-form">

            <label className="cart-form__select">
              <span className="cart-form__label">Получение заказа:</span>

              <select name="test" className="select">
                <option value="1">Заберу сам</option>
                <option value="2">Новый адрес</option>
                <option value="3">Дом</option>
              </select>
            </label>

            <label className="input input--big-label">
              <span>Контактный телефон:</span>
              <input type="text" name="tel" placeholder="+7 999-999-99-99"/>
            </label>

            <div className="cart-form__address">
              <span className="cart-form__label">Новый адрес:</span>

              <div className="cart-form__input">
                <label className="input">
                  <span>Улица*</span>
                  <input type="text" name="street"/>
                </label>
              </div>

              <div className="cart-form__input cart-form__input--small">
                <label className="input">
                  <span>Дом*</span>
                  <input type="text" name="house"/>
                </label>
              </div>

              <div className="cart-form__input cart-form__input--small">
                <label className="input">
                  <span>Квартира</span>
                  <input type="text" name="apartment"/>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section className="footer">
      <div className="footer__more">
        <a href="#" className="button button--border button--arrow">Хочу еще одну</a>
      </div>
      <p className="footer__text">Перейти к конструктору<br/>чтоб собрать ещё одну пиццу</p>
      <div className="footer__price">
        <b>Итого: 2 228 ₽</b>
      </div>

      <div className="footer__submit">
        <button type="submit" className="button">Оформить заказ</button>
      </div>
    </section>
  </form>
  );
}
