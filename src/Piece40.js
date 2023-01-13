import React from "react";
import VajraHeruka from "./img/VajraHeruka.jpg";

export default function Piece40() {
  return (
    <div className="Piece40">
      <h1>Частина II </h1>
      <h2>День 14</h2>
      <h3>1.</h3>
      <div>
        <p>О дитино шляхетного роду, слухай, не відволікаючись. </p>
        <p>
          Наступного дня зі східної частини твого мозку вийде й з’явиться перед
          тобою прояв родини ваджра, що п’є кров, –
        </p>
        <p>Благословенний Ваджра-Герука.</p>
        <p>Його тіло темно-синього кольору, </p>
        <p>в нього три голови, </p>
        <p>шість рук і </p>
        <p>чотири ноги, широко розпростерті. </p>
        <p>Правий лик його білий, </p>
        <p>лівий — червоний, </p>
        <p>а центральний — синього кольору.</p>

        <img className="img-fluid" src={VajraHeruka} alt="VajraHeruka" />
      </div>
    </div>
  );
}
