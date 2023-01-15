import React from "react";
import MotherSon from "./img/MotherSon.jpg";

export default function Piece108() {
  return (
    <div className="Piece108">
      <h1>Частина III </h1>
      <h2>День 36</h2>
      <h3>3.</h3>
      <p>Як і раніше, ти відчуєш ревнощі; </p>
      <br />
      <p>якщо тобі доведеться народитися чоловіком,</p>
      <p> ти кохатимеш свою матір і ненавидітимеш свого батька. </p>
      <br />
      <p>Якщо ж тобі доведеться народитися жінкою,</p>
      <p> ти кохатимеш батька й ненавидітимеш матір. </p>
      <br />
      <p>Тому зараз потрібна мудра вказівка.</p>
      <img className="img-fluid" src={MotherSon} alt="MotherSon" />
    </div>
  );
}
