import React from "react";
import House from "./img/House.jpg";

export default function Piece114() {
  return (
    <div className="Piece114">
      <h1>Частина III </h1>
      <h2>День 38</h2>
      <h3>3.</h3>

      <p>
        Якщо тобі доведеться народитися на південному континенті, «Острові
        рожевих яблунь», ти побачиш розкішні, прекрасні оселі.
      </p>
      <p>Вступи туди, якщо зможеш.</p>

      <img className="img-fluid" src={House} alt="House" />
    </div>
  );
}
