import React from "react";

export default function AdminError() {
  return (
    <main className="body-main">
      <div className="body-main__container body-main__container--center">
        <h1 className="body-main__title body-main__title--gray">500</h1>
        <h2 className="body-main__subtitle body-main__subtitle--size">
          Что то пошло не так
        </h2>
        <p className="body-main__text body-main__text--size">
          Попробуйте перезагрузить страницу
        </p>
        <button className="body-main__button body-main__button--blue body-main__button--width body-main__button--margin">
          Назад
        </button>
      </div>
    </main>
  );
}
