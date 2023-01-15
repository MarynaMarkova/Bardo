import React from "react";
import Burshtyn from "./img/Burshtyn.jpg";

export default function Piece122() {
  return (
    <div className="Piece122">
      <h1>Частина III </h1>
      <h2>День 41</h2>
      <h3>2.</h3>

      <p>
        Якщо тобі доведеться народитися голодним духом, ти побачиш пні дерев і
        чорні форми, що стирчать, дрібні печери й чорні плями.
      </p>
      <p>
        Якщо ти кинешся туди, ти народишся голодним духом і відчуєш всі види
        страждання від голоду й спраги, тому зовсім не прямуй туди та думай про
        протидію й наполегливо чини опір.
      </p>

      <img className="img-fluid" src={Burshtyn} alt="Burshtyn" />
    </div>
  );
}
