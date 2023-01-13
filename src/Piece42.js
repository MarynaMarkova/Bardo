import React from "react";
import VajraHeruka2 from "./img/VajraHeruka2.png";

export default function Piece42() {
  return (
    <div className="Piece42">
      <h1>Частина II </h1>
      <h2>День 14</h2>
      <h3>3.</h3>
      <div>
        <p>Не лякайся Ваджра-Геруку, не жахайся, не збентежуйся. </p>
        <p>Пізнай його як прояв твого ж розуму. </p>
        <p>Він – твій їдам, тому не бійся. </p>
        <p>Воістину він – Благословенний Ваджрасатва зі своєю дружиною, </p>
        <p>тому вияви пошану. </p>
        <p>Пізнання й звільнення прийдуть одночасно.</p>

        <img className="img-fluid" src={VajraHeruka2} alt="VajraHeruka2" />
      </div>
    </div>
  );
}
