import React from "react";
import MandalaBardo from "./img/MandalaBardo.jpg";

export default function Piece37() {
  return (
    <div className="Piece37">
      <h1>Частина II </h1>
      <h2>День 13</h2>
      <h3>1.</h3>
      <div>
        <p>Тепер буде сказано про явище бардо гнівних божеств.</p>
        <p>О дитино шляхетного роду, слухай, не відволікаючись. </p>
        <p>
          Хоча тобі вже з’явилось бардо мирних божеств, ти не пізнала його, тому
          ти продовжуєш блукати й досі.
        </p>
        <p>Тепер, наступного дня, з’являться гнівні божества, що п’ють кров.</p>

        <img src={MandalaBardo} alt="MandalaBardo" />
      </div>
    </div>
  );
}
