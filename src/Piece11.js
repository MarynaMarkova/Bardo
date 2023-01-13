import React from "react";
import thunder from "./img/thunder.jpg";

export default function Piece11() {
  return (
    <div className="Piece11">
      <h1>Частина I </h1>
      <h2>День 4</h2>
      <h3>2.</h3>
      <div>
        <p>
          З глибини світла прийде могутній гуркіт – природний звук сутнісної
          дійсності дгармадгату, подібний до тисячі одночасних ударів грому. Це
          природний звук твоєї сутнісної дійсності, тому не бійся й не впадай у
          відчай.
        </p>

        <p>
          Зараз ти маєш розумове тіло неусвідомлених прагнень, і в тебе немає
          тіла з плоті й крові, й ніякі звуки, барви, ніякі промені світла не
          можуть зашкодити тобі, й ти не можеш померти.
        </p>
        <p>Легко зрозуміти їх як твої ж прояви.</p>
        <p>Знай: це й є бардо.</p>

        <img className="img-fluid" src={thunder} alt="thunder" />
        <div className="PhotoBy">
          Photo by{" "}
          <a href="https://unsplash.com/@jeremythomasphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Jeremy Thomas
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/jh2KTqHLMjE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>
    </div>
  );
}
