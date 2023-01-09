import React from "react";
import Vajra from "./img/Vajra.jpg";
import Shanti from "./img/Shanti.jpg";
import Amrita from "./img/Amrita.jpg";
import Kandra from "./img/Kandra.jpg";
import Danda from "./img/Danda.jpg";
import Rakshasi1 from "./img/Rakshasi1.jpg";

export default function Piece56() {
  return (
    <div className="Piece56">
      <h1>Частина II </h1>
      <h2>День 19</h2>
      <h3>2.</h3>
      <div>
        <p>
          О дитино шляхетного роду, з півдня вийдуть із твого мозку й з’являться
          перед тобою шість йогинь півдня:
        </p>

        <ul>
          <li>
            <p>Ваджра – жовта, з головою свині. Вона тримає бритву в руці.</p>
          </li>
        </ul>
        <img src={Vajra} alt="Vajra" />
        <ul>
          <li>
            <p>
              Шанті, «Мирна» – червона, з головою водяного звіра. Вона тримає
              вазу.
            </p>
          </li>
        </ul>
        <img src={Shanti} alt="Shanti" />
        <ul>
          <li>
            <p>
              Амріта, «Нектар безсмертя» – червона, з головою скорпіона. Вона
              тримає лотос.
            </p>
          </li>
        </ul>
        <img src={Amrita} alt="Amrita" />
        <ul>
          <li>
            <p>
              Кандра, «Місяць» – біла, з головою яструба. Вона тримає ваджру.
            </p>
          </li>
        </ul>
        <img src={Kandra} alt="Kandra" />
        <ul>
          <li>
            <p>
              Данда, «Палиця» – темно-зелена, з головою лисиці. Вона тримає
              палицю.
            </p>
          </li>
        </ul>
        <img src={Danda} alt="Danda" />
        <ul>
          <li>
            <p>
              Та Ракшасі, «Демониця» – темно-жовта, з тигрячою головою. Вона
              тримає череп, повний крові.
            </p>
          </li>
        </ul>
        <img src={Rakshasi1} alt="Rakshasi1" />
        <p>Не лякайся їх.</p>
      </div>
    </div>
  );
}
