import React from "react";
import Ankusha from "./img/Ankusha.jpg";
import Pasha from "./img/Pasha.jpg";
import Shrinkhala from "./img/Shrinkhala.jpg";
import Ghanta from "./img/Ghanta.jpg";

export default function Piece54() {
  return (
    <div className="Piece54">
      <h1>Частина II </h1>
      <h2>День 18</h2>
      <h3>3.</h3>
      <div>
        <p>
          О дитино шляхетного роду, наступного дня також вийдуть із твого мозку
          й з’являться перед тобою чотири богині брам – пізнай же їх.
        </p>

        <ul>
          <li>
            <p>
              Зі східної частини твого мозку вийде й з’явиться перед тобою
              Анкуша – біла, з тигрячою головою, вона тримає стрекала й чашу з
              черепа, повну крові.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Ankusha} alt="Ankusha" />
        <ul>
          <li>
            <p>
              З півдня з’явиться Паша – жовта, з головою свині, котра тримає
              аркан.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Pasha} alt="Pasha" />
        <ul>
          <li>
            <p>
              Із заходу з’явиться Шрінкхала — червона, з головою лева, котра
              тримає залізний ланцюг.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Shrinkhala} alt="Shrinkhala" />
        <ul>
          <li>
            <p>
              Із півночі з'явиться Ґганта – зелена, з головою змії, котра тримає
              дзвін.
            </p>
          </li>
        </ul>

        <img className="img-fluid" src={Ghanta} alt="Ghanta" />
        <p>
          Ці чотири богині брам вийдуть із твого власного мозку й з’являться
          перед тобою.
        </p>
        <p>Пізнай їх як їдамів.</p>
      </div>
    </div>
  );
}
