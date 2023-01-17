import React from "react";
import Egg from "./img/Egg.jpg";

export default function Piece104() {
  return (
    <div className="Piece104">
      <h1>Частина III </h1>
      <h2>День 35</h2>
      <h3>2.</h3>

      <p>
        Якщо ж брами не зачиняться й ти ось-ось увійдеш до лона – є третя
        вказівка: як відвернути пристрасть і злість.{" "}
      </p>
      <p>Існує чотири види народження:</p>
      <ul>
        <li>народження з яйця</li>
        <li>народження з лона</li>
        <li>мимовільне народження та</li>
        <li>народження з вологи</li>
      </ul>
      <p>Із них подібні один до одного народження з яйця та з лона. </p>
      <p>
        Як і раніше, виникнуть образи самців і самиць у любовному союзі, та якщо
        ти цієї миті увійдеш до лона під владою пристрасті й злості, ти
        народишся в вигляді коня, птаха, собаки або людини.
      </p>

      <img className="img-fluid" src={Egg} alt="Egg" />
    </div>
  );
}