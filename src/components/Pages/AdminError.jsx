import React from "react";

export default function AdminError() {
  return (
    <main class="body-main">
      <div class="body-main__container body-main__container--center">
        <h1 class="body-main__title body-main__title--gray">500</h1>
        <h2 class="body-main__subtitle body-main__subtitle--size">
          Что то пошло не так
        </h2>
        <p class="body-main__text body-main__text--size">
          Попробуйте перезагрузить страницу
        </p>
        <button class="body-main__button body-main__button--blue body-main__button--width body-main__button--margin">
          Назад
        </button>
      </div>
    </main>
  );
}
