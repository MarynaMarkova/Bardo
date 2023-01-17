import React from "react";
import YabYum from "./img/YabYum.jpg";

export default function Piece97() {
  return (
    <div className="Piece97">
      <h1>Частина III </h1>
      <h2>День 33</h2>
      <h3>1.</h3>
      <p>
        Але, якщо це тебе не зупинить, і ти ось-ось увійдеш до лона, то є
        глибокі настанови, що можуть допомогти зачинити брами лона, котрі готові
        впустити тебе – отже слухай. Повторюй за мною молитву:{" "}
      </p>
      <div className="Prayer">
        <p>
          Тепер, коли для мене сходить зоря бардо поставання/переродження (сіпа
          бардо),{" "}
        </p>
        <p>Я зосереджу свій розум </p>
        <p>І намагатимусь подовжити вплив доброї карми,</p>
        <p>Зачинити брами лона й міркувати про протидію, </p>
        <p>Прийшов час, коли потрібні стійкість і чиста думка, </p>
        <p>
          Коли потрібно відкинути ревнощі та медитувати на Ґуру та його дружину.
        </p>
      </div>
      <p>
        Ясно й голосно вимовляй ці слова й напружуй пам’ять, дуже важливо
        медитувати на зміст цих слів і практично виконати їх.
      </p>

      <img className="img-fluid" src={YabYum} alt="YabYum" />
    </div>
  );
}