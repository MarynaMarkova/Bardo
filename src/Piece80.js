import React from "react";
import Nepevnenist from "./img/Nepevnenist.jpg";

export default function Piece80() {
  return (
    <div className="Piece80">
      <h1>Частина III </h1>
      <h2>День 27</h2>
      <h3>2.</h3>

      <p>
        Приходить час, коли в тебе немає більше їжі окрім тієї, що була
        присвячена тобі, та про твоїх друзів не можна сказати нічого певного.{" "}
      </p>
      <p>
        Це ознаки того, що розумове тіло блукає в бардо поставання/переродження
        (сіпа бардо).{" "}
      </p>
      <p>Цієї миті насолода та біль визначаються твоєю кармою.</p>

      <img src={Nepevnenist} alt="Nepevnenist" />
    </div>
  );
}
