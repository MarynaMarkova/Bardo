import React from "react";
import Amitabha from "./img/Amitabha.jpg";

export default function Piece5() {
  return (
    <div className="Piece5">
      <h1>Частина I </h1>
      <h2>День 2</h2>
      <h3>2.</h3>
      <div>
        <p>
          Цей твій розум – світло й порожнеча, є невіддільними від Великого Тіла
          Сяйва – не народжується й не помирає, бо він і є Амітабга, Будда
          Безсмертного Світла.
        </p>
        <p>Пізнай це – це все, що наразі потрібно.</p>
        <p>
          Коли ти пізнаєш чисту природу свого розуму як Будду, ти збережеш стан
          духа Будди, зазирнувши в себе.
        </p>

        <img src={Amitabha} alt="Amitabha" />
      </div>
    </div>
  );
}
