import React from "react";

import AdminBodyLayout from "../layouts/AdminBodyLayout.jsx";

export default function AdminOrderList() {
  return (
    <AdminBodyLayout title="Заказы">
      <div className="body-main__order">
        <div className="body-main__header body-main__header--border">
          <div className="body-main__options">
            <div className="body-main__select-wrapper">
              <div className="body-main__arrows"></div>
              <select name="" id="" className="body-main__select">
                <option value="">За год</option>
                <option value="">За месяц</option>
                <option value="">За неделю</option>
                <option value="">За день</option>
              </select>
            </div>
            <div className="body-main__select-wrapper">
              <div className="body-main__arrows"></div>
              <select name="" id="" className="body-main__select">
                <option value="">Sonata</option>
                <option value="">Elantra</option>
                <option value="">i30 N</option>
                <option value="">Creta</option>
              </select>
            </div>
            <div className="body-main__select-wrapper">
              <div className="body-main__arrows"></div>
              <select name="" id="" className="body-main__select">
                <option value="">Ульяновск</option>
                <option value="">Москва</option>
                <option value="">Самара</option>
                <option value="">Казань</option>
              </select>
            </div>
            <div className="body-main__select-wrapper">
              <div className="body-main__arrows"></div>
              <select name="" id="" className="body-main__select">
                <option value="">В процессе</option>
                <option value="">Не начато</option>
                <option value="">Завершено</option>
              </select>
            </div>
          </div>
          <button className="body-main__button body-main__button--blue body-main__button--width">
            Применить
          </button>
        </div>
        <div className="body-main__list">
          <div className="body-main__item">
            <div className="body-main__car">
              <img
                src="/images/orderpage/cars/ELANTRA.jpg"
                alt=""
                className="body-main__image body-main__image--width"
              />
              <div className="body-main__descr">
                <p className="body-main__text body-main__text--light">
                  <font>ELANTRA</font> в <font>Ульяновск</font>, Нариманова 42
                </p>
                <p className="body-main__text body-main__text--light">
                  12.06.2019 12:00 — 13.06.2019 12:00
                </p>
                <p className="body-main__text body-main__text--light">
                  Цвет: <font>Голубой</font>
                </p>
              </div>
            </div>
            <div className="body-main__checkbox-group">
              <label className="checkbox-section__container checkbox-section__container--color">
                <input type="checkbox" className="checkbox-section__input" />
                <span className="checkbox-section__checkmark checkbox-section__checkmark--border"></span>
                Полный бак
              </label>
              <label className="checkbox-section__container checkbox-section__container--color">
                <input type="checkbox" className="checkbox-section__input" />
                <span className="checkbox-section__checkmark checkbox-section__checkmark--border"></span>
                Детское кресло
              </label>
              <label className="checkbox-section__container checkbox-section__container--color">
                <input type="checkbox" className="checkbox-section__input" />
                <span className="checkbox-section__checkmark checkbox-section__checkmark--border"></span>
                Правый руль
              </label>
            </div>
            <div className="body-main__price">4 300 ₽</div>
            <div className="body-main__btn-group">
              <button className="body-main__action body-main__action--accept">
                Готово
              </button>
              <button className="body-main__action body-main__action--decline">
                Отмена
              </button>
              <button className="body-main__action body-main__action--change">
                <span></span>
                Изменить
              </button>
            </div>
          </div>
        </div>
        <div className="body-main__footer body-main__footer--border"></div>
      </div>
    </AdminBodyLayout>
  );
}
