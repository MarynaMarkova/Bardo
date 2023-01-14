import React from "react";
import LotusPalace from "./img/LotusPalace.jpg";

export default function Piece131() {
  return (
    <div className="Piece131">
      <h1>Частина III </h1>
      <h2>День 44</h2>
      <h3>2.</h3>
      <p>
        Або, якщо ж ти, не відволікаючись, спрямуєш сильну зосереджену думку до
        будь-якого царства, яке забажаєш – чи то Чисте Царство, Царство
        Досконалої Радості, Царство Щільно Наповнене, Царство Вербного Листя,
        Гора Пальмового Дерева або Палац Світла Лотоса в Урґ’яні – ти негайно
        народишся в цьому царстві.
      </p>

      <img className="img-fluid" src={LotusPalace} alt="LotusPalace" />
    </div>
  );
}
