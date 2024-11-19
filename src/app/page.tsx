'use client';

import { ChangeEvent } from 'react';
import "../app/style.scss";
import { useGetIngredientsQuery,  useGetWhoAmIQuery,  usePostAddressesMutation,  usePostLoginMutation,  usePostOrderMutation } from '@/feature/rtkQuery';
import Ingredients from '@/components/ingredients/ingredients';



export default function Home() {

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // const [pizza, setPizza] = useState<PizzaType>({
  //   name: '',
  //   sauceId: 0,
  //   doughId: 0,
  //   sizeId: 0,
  //   quantity: 1,
  //   ingredients: [
  //     {
  //       ingredientId: 0,
  //       quantity:0
  //     }
  //   ]
  // });

  // pass ingredients data from server to the component
  
  const {data: items} = useGetIngredientsQuery();
  const ingredients = items?.map((item) => ({...item, quantity: 0}))

  const [sendLogin] = usePostLoginMutation();
  const [sendOrder] = usePostOrderMutation();
  const [sendAdress] = usePostAddressesMutation();
  const {data: sendWhoAmI} = useGetWhoAmIQuery();

  const onChange = () => {

    //отправить логин на сервер
    sendLogin({
      email: 'user@example.com',
      password: 'user@example.com'});

      console.log(sendWhoAmI);

    //отправить заказ на сервер
    sendOrder(
      {
        userId: "string",
        phone: "+7 999-999-99-99",
        address: {
          street: "string",
          building: "string",
          flat: "string",
          comment: "string"
        },
        pizzas: [
          {
            name: "string",
            sauceId: 0,
            doughId: 0,
            sizeId: 0,
            quantity: 0,
            ingredients: [
              {
                ingredientId: 0,
                quantity: 0
              }
            ]
          }
        ],
        misc: [
          {
            miscId: 0,
            quantity: 0
          }
        ]
      })

    //отправить адрес на сервер
    sendAdress({
      name: "string",
      userId: "string",
      street: "string",
      building: "string",
      flat: "string",
      comment: "string"
    })

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

              {
                ingredients !== undefined && (<Ingredients ingredients={ingredients} />)
              }
              

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
