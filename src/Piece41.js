import React from "react";
import VajraHeruka1 from "./img/VajraHeruka1.png";

export default function Piece41() {
  return (
    <div className="Piece41">
      <h1>Частина II </h1>
      <h2>День 14</h2>
      <h3>2.</h3>
      <div>
        <p>В правій верхній руці Ваджра-Герука тримає ваджру, </p>
        <p>в середній – чашу з черепа,</p>
        <p>в нижній – бойову сокиру; </p>
        <p>в лівій верхній руці в нього дзвін, </p>
        <p>в середній – чаша з черепа, </p>
        <p>в нижній – леміш. </p>
        <p>Його тіло обіймає його дружина Ваджра-Кродгишварі, </p>
        <p>обвиває шию правою рукою, </p>
        <p>а лівою підносить до його рота череп, повний крові.</p>

        <img className="img-fluid" src={VajraHeruka1} alt="VajraHeruka1" />
      </div>
    </div>
  );
}
