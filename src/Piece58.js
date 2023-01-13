import React from "react";
import Vajudevi from "./img/Vajudevi.jpg";
import Nari from "./img/Nari.jpg";
import Vajra1 from "./img/Vajra1.jpg";
import Mahahastini from "./img/Mahahastini.jpg";
import Varagi from "./img/Varagi.jpg";
import Varunadevi from "./img/Varunadevi.jpg";

export default function Piece58() {
  return (
    <div className="Piece58">
      <h1>Частина II </h1>
      <h2>День 20</h2>
      <h3>1.</h3>
      <div>
        <p>
          О дитино шляхетного роду, з півночі вийдуть із твого мозку й
          з’являться перед тобою шість йогинь півночі:
        </p>

        <ul>
          <li>
            <p>
              Ваюдеві, «Богиня вітру» – синя, з головою вовчиці, з прапором, що
              розвивається, в руці.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Vajudevi} alt="Vajudevi" />
        <ul>
          <li>
            <p>
              Нарі, «Жінка» – червона, з головою буйволиці. Вона тримає
              загострений кіл.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Nari} alt="Nari" />
        <ul>
          <li>
            <p>
              Варагі, «Свиня» – чорна, з головою свині. Вона тримає аркан,
              унизаний зубами.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Varagi} alt="Varagi" />
        <ul>
          <li>
            <p>
              Ваджра – червона, з воронячою головою. Вона тримає шкіру дитини.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Vajra1} alt="Vajra1" />
        <ul>
          <li>
            <p>
              Магагастині, «Слониха» – темно-зелена, з головою слона. Вона
              тримає в руці труп гіганта й п’є його кров.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Mahahastini} alt="Mahahastini" />

        <ul>
          <li>
            <p>
              Та Варунадеві, «Богиня води» – синя, з головою змії. Вона тримає
              аркан зі змій.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Varunadevi} alt="Varunadevi" />
        <p>Не лякайся їх.</p>
      </div>
    </div>
  );
}
