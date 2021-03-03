/**
 * @file Cards component.
 */

import React, { useEffect } from 'react';

import usecardsCourseProvider from '../hooks/use-cardsCourse-provider';

const Cards = () => {
  const [cards, fetchCards] = usecardsCourseProvider();

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="Cards_content">
      {cards != null
        ? cards.map(function (card) {
            console.log(cards);
            return (
              <div className="Card" key={card.id}>
                <div className="top__content">
                  <div className="tag">
                    <p>TAG VENTA</p>
                  </div>
                </div>
                <div className="bottom__content">
                  <div className="sub_bottom__content">
                    <div className="card__data">
                      <label htmlFor="...">{card.courseName}</label>
                      <label htmlFor="...">{card.username}</label>
                      <a href="/#">
                        <i className="fas fa-signal">{`Nivel ${card.level}`}</i>
                      </a>
                      <a href="/#">
                        <i className="fas fa-user-friends">{`${card.users} Usuarios`}</i>
                      </a>
                      <a href="/#">
                        <i className="fas fa-star">{card.course_score}</i>
                      </a>
                    </div>
                    <div className="precio__content">
                      <p className="precio__content___ofert">{`co$${card.price}`}</p>
                      <p className="precio__content___regular">{`CO$${card.real_price}`}</p>
                    </div>
                    <button type="button">Comprar ahora</button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Cards;
