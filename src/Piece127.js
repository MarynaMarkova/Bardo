import React from "react";
import Bisy from "./img/Bisy.jpg";

export default function Piece127() {
  return (
    <div className="Piece127">
      <h1>Частина III </h1>
      <h2>День 43</h2>
      <h3>1.</h3>

      <p>
        Ти боїшся зустріти жахи бардо, якщо вийдеш назовні, ти дуже боїшся їх;
        тому ти сховаєшся всередині та втілишся, яким би тіло не було поганим, і
        відчуєш усі види страждання.
      </p>
      <p>
        {" "}
        Це ознака того, що біси й злі сили заволоділи тобою зараз, і в цей час
        потрібна мудра вказівка – слухай же й осягай.
      </p>

      <img className="img-fluid" src={Bisy} alt="Bisy" />
    </div>
  );
}
