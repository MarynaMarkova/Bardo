import React from "react";
import KarmaHeruka1 from "./img/KarmaHeruka1.jpg";

export default function Piece50() {
  return (
    <div className="Piece50">
      <h1>Частина II </h1>
      <h2>День 17</h2>
      <h3>2.</h3>
      <div>
        <p>В верхній правій руці Карма-Герука тримає меч, </p>
        <p>у середній – посох, </p>
        <p>у нижній – жезл; </p>
        <p>у верхній лівій руці в нього дзвін, </p>
        <p>у середній – чаша з черепу, </p>
        <p>в нижній – леміш.</p>
        <p>Його тіло обіймає його дружина Карма-Кродгишварі,</p>
        <p>правою рукою обвиває його шию, </p>
        <p>а лівою – підносить до його рота чашу з черепа, повну крові.</p>

        <img className="img-fluid" src={KarmaHeruka1} alt="KarmaHeruka1" />
      </div>
    </div>
  );
}
