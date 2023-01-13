import React from "react";
import fiveElements from "./img/fiveElements.jpg";

export default function Piece1() {
  return (
    <div className="Piece1">
      <h1>Частина I </h1>
      <h2>День 1</h2>
      <h3>1.</h3>
      <div>
        <p>Ушануймо вчителів, ушануймо Три Тіла Будди: </p>
        <p>Амітабгу – Безмежне Світло, Тіло Дгарми, </p>
        <p>Богів Лотосу, мирних і гнівних, Тіло Блаженства,</p>
        <p>Падмасамбгаву, захисника живих істот, Примарне Тіло.</p>
      </div>
      <div>
        <p>
          О дитино шляхетного роду, прийшов твій час шукати дорогу. Коли
          зупиниться твоє дихання, тобі з’явиться те, що тобі вже показав твій
          учитель, те, що зветься початковим світлом першого бардо. Це абсолютна
          сутність буття; відкрита й вільна, мов простір, порожнеча, що
          випромінює світло; чистий оголений розум без центру й кордонів.
          Пізнавай же, перебуваючи в цьому світлі, а я тим часом вестиму тебе.{" "}
        </p>

        <p>
          Ось з’являються ознаки розчинення землі в воді, води в вогні, вогню в
          повітрі, повітря в просторі, простору – в світлоносній порожнечі.
        </p>

        <img className="img-fluid" src={fiveElements} alt="Five Elements" />
      </div>
    </div>
  );
}
