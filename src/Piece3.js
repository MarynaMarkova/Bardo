import React from "react";
import light from "./img/light.jpg";

export default function Piece3() {
  return (
    <div className="Piece3">
      <h1>Частина I </h1>
      <h2>День 1</h2>
      <h3>3.</h3>
      <div>
        <p>О дитино шляхетного роду, слухай.</p>
        <p>Зараз чисте світло абсолютної сутності сяє перед тобою.</p>
        <p>Пізнай його.</p>

        <img src={light} alt="Clear Light" />
      </div>
    </div>
  );
}
