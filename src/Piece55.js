import React from "react";
import Rakshasi from "./img/Rakshasi.jpg";
import Bragmi from "./img/Bragmi.jpg";
import Mahadevi from "./img/Mahadevi.jpg";
import Lobha from "./img/Lobha.jpg";
import Kumari from "./img/Kumari.jpg";
import Indrani from "./img/Indrani.jpg";

export default function Piece55() {
  return (
    <div className="Piece55">
      <h1>Частина II </h1>
      <h2>День 19</h2>
      <h3>1.</h3>
      <div>
        <p>
          О дитино шляхетного роду, за тридцятьма гнівними геруками в свою чергу
          вийдуть із твого мозку й з’являться перед тобою двадцять вісім йогинь
          із різними головами, різними символами в руках.
        </p>
        <p>
          Не лякайся їх, але пізнай все, що з’являється, як гру твого ж розуму,
          як твої ж прояви.
        </p>
        <p>Досягнувши цієї рішучої миті, пригадай настанови свого Гуру. </p>
        <p>
          О дитино шляхетного роду, зі сходу вийдуть із твого мозку й з’являться
          перед тобою шість йогинь сходу:
        </p>
        <ul>
          <li>
            <p>
              Ракшасі, «Демониця» – винного кольору, з головою яка. Вона тримає
              ваджру в руці.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Rakshasi} alt="Rakshasi" />
        <ul>
          <li>
            <p>Брагмі – помаранчова, з головою змії. Вона тримає лотос.</p>
          </li>
        </ul>
        <img className="img-fluid" src={Bragmi} alt="Bragmi" />
        <ul>
          <li>
            <p>
              Магадеві, «Велика Богиня» – темно-зелена, з головою леопарда. Вона
              тримає тризуб.
            </p>
          </li>
        </ul>
        <img className="img-fluid" src={Mahadevi} alt="Mahadevi" />
        <ul>
          <li>
            <p>
              Лобга, «Жадібна» – синя, з головою мангуста. Вона тримає колесо.
            </p>
          </li>
        </ul>

        <img className="img-fluid" src={Lobha} alt="Lobha" />
        <ul>
          <li>
            <p>
              Кумарі, «Діва» – червона, з головою жовтого ведмедя. Вона тримає
              короткий спис.
            </p>
          </li>
        </ul>

        <img className="img-fluid" src={Kumari} alt="Kumari" />
        <ul>
          <li>
            <p>
              Та Індрані – біла, з головою бурого ведмедя. Вона тримає аркан із
              кишок.
            </p>
          </li>
        </ul>

        <img className="img-fluid" src={Indrani} alt="Indrani" />
        <p>Не лякайся їх.</p>
      </div>
    </div>
  );
}
