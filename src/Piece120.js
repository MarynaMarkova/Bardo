import React from "react";
import AmusementPark from "./img/AmusementPark.jpeg";

export default function Piece120() {
  return (
    <div className="Piece120">
      <h1>Частина III </h1>
      <h2>День 40</h2>
      <h3>3.</h3>

      <p>
        Якщо тобі доведеться народитися ревнивим богом, ти побачиш прекрасні гаї
        або те, що здається вогняними колесами, які обертаються.
      </p>
      <p>Не вступай туди зовсім та міркуй про протидію.</p>

      <img className="img-fluid" src={AmusementPark} alt="AmusementPark" />
    </div>
  );
}
