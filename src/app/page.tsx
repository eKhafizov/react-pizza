'use client';

import { ChangeEvent } from 'react';
import "../app/style.scss";
import { usePostLoginMutation } from '@/feature/rtkQuery';



export default function Home() {
  const [postLogin] = usePostLoginMutation();
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = () => {
    postLogin({
      id : '666' ,
      name: 'devil',
      email: 'devil@devil.ru',
      avatar: 'no',
      phone: '6666666666',
      password: 'devilPass'});
  };

  return (
    <main className="content">
    <form action="#" method="post" onSubmit={onSubmit}>

      <div className="content__wrapper">
        <h1 className="title title--big">Конструктор пиццы</h1>

        <div className="content__dough">

          <div className="sheet">
            <h2 className="title title--small sheet__title">Выберите тесто</h2>

            <div className="sheet__content dough">
              <label className="dough__input dough__input--light">
                <input type="radio" name="dought" value="light" className="visually-hidden"  onChange={onChange}/>
                <b>Тонкое</b>
                <span>Из твердых сортов пшеницы</span>
              </label>

            <label className="dough__input dough__input--large">
                <input type="radio" name="dought" value="large" className="visually-hidden"  onChange={onChange} />
                <b>Толстое</b>
                <span>Из твердых сортов пшеницы</span>
              </label>
            </div>

          </div>

        </div>

        <div className="content__diameter">
          <div className="sheet">
            <h2 className="title title--small sheet__title">Выберите размер</h2>

            <div className="sheet__content diameter">
              <label className="diameter__input diameter__input--small">
                <input type="radio" name="diameter" value="small" className="visually-hidden" onChange={onChange}/>
                <span>23 см</span>
              </label>
              <label className="diameter__input diameter__input--normal">
                <input type="radio" name="diameter" value="normal" className="visually-hidden"  onChange={onChange}/>
                <span>32 см</span>
              </label>
              <label className="diameter__input diameter__input--big">
                <input type="radio" name="diameter" value="big" className="visually-hidden"  onChange={onChange}/>
                <span>45 см</span>
              </label>
            </div>
          </div>
        </div>

        <div className="content__ingredients">
          <div className="sheet">
            <h2 className="title title--small sheet__title">Выберите ингредиенты</h2>

            <div className="sheet__content ingredients">

              <div className="ingredients__sauce">
                <p>Основной соус:</p>

                <label className="radio ingredients__input">
                  <input type="radio" name="sauce" value="tomato"  onChange={onChange}/>
                  <span>Томатный</span>
                </label>
                <label className="radio ingredients__input">
                  <input type="radio" name="sauce" value="creamy"  onChange={onChange}/>
                  <span>Сливочный</span>
                </label>
              </div>

              <div className="ingredients__filling">
                <p>Начинка:</p>

                <ul className="ingredients__list">
                  <li className="ingredients__item">
                    <span className="filling filling--mushrooms">Грибы</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--cheddar">Чеддер</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--salami">Салями</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--ham">Ветчина</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0" onChange={onChange} />
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--ananas">Ананас</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--bacon">Бекон</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--onion">Лук</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0" onChange={onChange} />
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--chile">Чили</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--jalapeno">Халапеньо</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--olives">Маслины</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--tomatoes">Томаты</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--salmon">Лосось</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--mozzarella">Моцарелла</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--parmesan">Пармезан</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li className="ingredients__item">
                    <span className="filling filling--blue_cheese">Блю чиз</span>

                    <div className="counter counter--orange ingredients__counter">
                      <button type="button" className="counter__button counter__button--minus" disabled>
                        <span className="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                      <button type="button" className="counter__button counter__button--plus">
                        <span className="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>

              </div>

            </div>
          </div>
        </div>

        <div className="content__pizza">
          <label className="input">
            <span className="visually-hidden">Название пиццы</span>
            <input type="text" name="pizza_name" placeholder="Введите название пиццы" onChange={onChange}/>
          </label>

          <div className="content__constructor">
            <div className="pizza pizza--foundation--big-tomato">
              <div className="pizza__wrapper">
                <div className="pizza__filling pizza__filling--ananas"></div>
                <div className="pizza__filling pizza__filling--bacon"></div>
                <div className="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div className="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" className="button" disabled>Готовьте!</button>
          </div>
        </div>

      </div>

    </form>
  </main>
  );
}
