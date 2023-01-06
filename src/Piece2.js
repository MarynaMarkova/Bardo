import React from "react";
import mahamudra from "./img/mahamudra.jpg";

export default function Piece2() {
  return (
    <div className="Piece2">
      <h1>Частина I </h1>
      <h2>День 1</h2>
      <h3>2.</h3>
      <div>
        <p>
          О дитино шляхетного роду, прийшло те, що зветься смертю, й тобі треба
          зрозуміти: «Настала моя смертна година, й тепер, завдяки смерті, я
          побачу світ із позиції просвітленого розуму, дружелюбності й
          співвідчуття, досягну повного просвітлення заради всіх живих істот у
          безмежному просторі. З цими думками, саме зараз, заради всіх живих
          істот я пізнаю порожнечу смерті, що світиться, як Тіло Дгарми.
          Реалізуючи при цьому Великий Символ, я діятиму заради блага всього
          живого. Якщо я цього не досягну, я пізнаю бардо як воно є; досягаючи ж
          неподільної форми Великого Символу в бардо, я роблю благо всьому
          живому в безмежному просторі, який би шлях не вів до цієї мети».
        </p>
        <p>
          Не дозволяй собі вийти з цього стану й намагайся пригадати та відчути
          вчення про медитацію, яке ти пізнала раніше.
        </p>

        <img src={mahamudra} alt="Maha Mudra Mandala" />
      </div>
    </div>
  );
}