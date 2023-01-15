import React from "react";
import FairyLand from "./img/FairyLand.jpg";

export default function Piece115() {
  return (
    <div className="Piece115">
      <h1>Частина III </h1>
      <h2>День 39</h2>
      <h3>1.</h3>

      <p>
        Якщо тобі доведеться народитися на східному континенті, що звуть
        «Благородний», ти побачиш озеро, де плавають лебеді й лебедині.{" "}
      </p>
      <p>Міркуй про протидію та не кидайся туди. </p>
      <p>
        Хоча це місце сповнене щастя, Вчення Будди не процвітає там, тому не
        вступай туди.
      </p>

      <img className="img-fluid" src={FairyLand} alt="FairyLand" />
    </div>
  );
}
