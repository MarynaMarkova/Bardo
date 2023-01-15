import React from "react";
import Mesnyky from "./img/Mesnyky.jpg";

export default function Piece125() {
  return (
    <div className="Piece125">
      <h1>Частина III </h1>
      <h2>День 42</h2>
      <h3>2.</h3>

      <p>
        О дитино шляхетного роду, навіть якщо ти не хочеш іти – ти не маєш
        власної сили й вимушена безпорадно йти.{" "}
      </p>
      <p>
        Ззаду тебе переслідують кармічні месники й спереду тягнуть месники та
        вбивці; навколо тебе закружляють пітьма, урагани, люті шторми, гуркіт,
        сніг і дощ, шалений град і хуртовина, й ти побіжиш від них.
      </p>

      <img className="img-fluid" src={Mesnyky} alt="Mesnyky" />
    </div>
  );
}
