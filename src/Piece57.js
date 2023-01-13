import React from "react";
import Bhakshini from "./img/Bhakshini.jpg";
import Rati from "./img/Rati.jpg";
import Mahabala from "./img/Mahabala.jpg";
import Rakshasi2 from "./img/Rakshasi2.jpg";
import Kama from "./img/Kama.jpg";
import Vasuraksha from "./img/Vasuraksha.jpg";

export default function Piece57() {
  return (
    <div className="Piece57">
      <h1>Частина II </h1>
      <h2>День 19</h2>
      <h3>3.</h3>
      <div>
        <p>
          О дитино шляхетного роду, з заходу вийдуть із твого мозку й з’являться
          перед тобою шість йогинь заходу:
        </p>

        <ul>
          <li>
            <p>
              Бгакшині, «Та, що поїдає» –темно-зелена, з головою грифа. Вона
              тримає палицю.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Bhakshini} alt="Bhakshini" />
        <ul>
          <li>
            <p>
              Раті, «Насолода» – червона, з конячою головою. Вона тримає в руці
              труп гіганта.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Rati} alt="Rati" />
        <ul>
          <li>
            <p>
              Магабала, «Велика сила» – біла, з головою птаха-гаруди. Вона
              тримає палицю.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Mahabala} alt="Mahabala" />
        <ul>
          <li>
            <p>
              Ракшасі, «Демониця» – червона, з собачою головою. Вона ріже
              ваджрою, мов бритвою.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Rakshasi2} alt="Rakshasi2" />
        <ul>
          <li>
            <p>
              Кама, «Бажання», – червона, з головою одуда. Вона випускає стрілу
              з лука.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Kama} alt="Kama" />
        <ul>
          <li>
            <p>
              Та Васуракша, «Покровителька багатства» – темно-зелена, з головою
              лані. Вона тримає вазу.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Vasuraksha} alt="Vasuraksha" />
        <p>Не лякайся їх.</p>
      </div>
    </div>
  );
}
