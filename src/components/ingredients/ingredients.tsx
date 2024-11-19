'use client';

import React from 'react';
import { useState } from 'react';

type Typo = {
  ingredients: { quantity: number; Id: number; image: string; name: string; price: number; }[];
}
function Ingredients({ingredients} : Typo ) : JSX.Element {

  // получаем ингредиенты с сервера и отрисовываем
  // не меняем их и не используем напрямую как стейт
  // создаем копию в переменной
  const arr = [...ingredients].map((item) => ({...item, quantity: 0}));

  // используем в стейт
  const [array, setArray] = useState([...arr]);

  // инпутами и кликами меняем стейт
  const onChange = () => {
  };

  // передаем стейт итоговый в стор

  
  

  return (
    <div className="ingredients__filling">
      <p>Начинка:</p>
      <ul className="ingredients__list">
        {
          array !== undefined && array.slice(0,15).map((ingredient) => (
            <li key={ingredient.Id} className="ingredients__item">
              <span className={`filling filling--${ingredient.name}`}>{ingredient.name}</span>
              <div className="counter counter--orange ingredients__counter">
                <button type="button" className="counter__button counter__button--minus" >
                  <span className="visually-hidden">Меньше</span>
                </button>
                <input type="text" name="counter" className="counter__input" value="0"  onChange={onChange}/>
                <button type="button" className="counter__button counter__button--plus">
                  <span className="visually-hidden">Больше</span>
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Ingredients;