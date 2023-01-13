import React from "react";
import RatnaHeruka2 from "./img/RatnaHeruka2.png";

export default function Piece45() {
  return (
    <div className="Piece45">
      <h1>Частина II </h1>
      <h2>День 15</h2>
      <h3>3.</h3>
      <div>
        <p>Не лякайся Ратна-Геруку, не жахайся, не збентежуйся. </p>
        <p>Пізнай його як прояв твого ж розуму. </p>
        <p>Він – твій їдам, тому не бійся. </p>
        <p>
          Воістину, він – Благословенний Ратнасамбгава зі своєю дружиною, –{" "}
        </p>
        <p>то відчуй потяг до нього. </p>
        <p>Пізнання й звільнення прийдуть одночасно.</p>

        <img className="img-fluid" src={RatnaHeruka2} alt="RatnaHeruka2" />
      </div>
    </div>
  );
}
