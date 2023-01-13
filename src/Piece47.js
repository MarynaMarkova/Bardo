import React from "react";
import PadmaHeruka1 from "./img/PadmaHeruka1.png";

export default function Piece47() {
  return (
    <div className="Piece47">
      <h1>Частина II </h1>
      <h2>День 16</h2>
      <h3>2.</h3>
      <div>
        <p>В правій верхній руці Падма-Герука тримає лотос,</p>
        <p>в середній – тризуб із трьома людськими головами, </p>
        <p>в нижній – жезл; </p>
        <p>у лівій верхній руці в нього дзвін, </p>
        <p>у середній – чаша з черепа, повна крові, </p>
        <p>в нижній – маленький барабан. </p>
        <p>Його тіло обіймає його дружина Падма-Кродгишварі, </p>
        <p>обвиває його шию правою рукою, </p>
        <p>а лівою – підносить до його рота чашу з черепа, повну крові.</p>

        <img className="img-fluid" src={PadmaHeruka1} alt="PadmaHeruka1" />
      </div>
    </div>
  );
}
