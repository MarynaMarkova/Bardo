import React from "react";
import FairyLand from "./img/FairyLand.jpg";

export default function Piece113() {
  return (
    <div className="Piece113">
      <h1>Частина III </h1>
      <h2>День 38</h2>
      <h3>2.</h3>

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
