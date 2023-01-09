import React from "react";
import Vajra2 from "./img/Vajra2.jpg";
import Vajra3 from "./img/Vajra3.jpg";
import Vajra4 from "./img/Vajra4.jpg";
import Vajra5 from "./img/Vajra5.jpg";

export default function Piece58() {
  return (
    <div className="Piece58">
      <h1>Частина II </h1>
      <h2>День 20</h2>
      <h3>2.</h3>
      <div>
        <p>
          О дитино шляхетного роду, з твого мозку вийдуть і з’являться перед
          тобою чотири йогині брам:
        </p>

        <ul>
          <li>
            <p>
              Зі сходу – біла Ваджра, з головою зозулі. Вона тримає в руці
              залізний гак.
            </p>
          </li>
        </ul>
        <img src={Vajra2} alt="Vajra2" />
        <ul>
          <li>
            <p>
              Із півдня з'явиться перед тобою жовта Ваджра з головою кози. Вона
              тримає аркан.
            </p>
          </li>
        </ul>
        <img src={Vajra3} alt="Vajra3" />
        <ul>
          <li>
            <p>
              Із заходу з'явиться перед тобою червона Ваджра з головою лева.
              Вона тримає залізний ланцюг.
            </p>
          </li>
        </ul>
        <img src={Vajra4} alt="Vajra4" />
        <ul>
          <li>
            <p>
              Із півночі з'явиться перед тобою темно-зелена Ваджра, з головою
              змії. Вона тримає дзвін.
            </p>
          </li>
        </ul>
        <img src={Vajra5} alt="Vajra5" />

        <p>
          Ці чотири йогині брам вийдуть із твого мозку й з’являться перед тобою.
        </p>
        <p>
          Ці двадцять вісім йогинь мимовільно виникають із гри самоствореної
          сили гнівних герук – пізнай же їх.
        </p>
      </div>
    </div>
  );
}
