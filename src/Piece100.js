import React from "react";
import Concentration from "./img/Concentration.jpg";

export default function Piece100() {
  return (
    <div className="Piece100">
      <h1>Частина III </h1>
      <h2>День 34</h2>
      <h3>1.</h3>
      <br />
      <p>Нічого не забувай, не відволікайся. </p>
      <br />

      <p>Настав час, який розділяє шлях догори й донизу; </p>

      <p>
        настав час, коли миттєва лінь змусить тебе страждати довго, дуже довго;{" "}
      </p>

      <p>настав час, коли зосередження дуже надовго зробить тебе щасливою. </p>

      <p>Зосередь свій розум; </p>

      <p>прагни подовжити вплив доброї карми.</p>

      <img className="img-fluid" src={Concentration} alt="Concentration" />
    </div>
  );
}
