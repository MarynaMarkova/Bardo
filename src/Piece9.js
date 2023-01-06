import React from "react";
import mirrors from "./img/mirrors.jpg";

export default function Piece9() {
  return (
    <div className="Piece9">
      <h1>Частина I </h1>
      <h2>День 3</h2>
      <h3>3.</h3>
      <div>
        <p>
          О дитино шляхетного роду, які би жахливі видіння не виникали в бардо
          сутнісної дійсності дгармадгату, не забувай слова, що я тобі кажу; йди
          вперед, зберігаючи в серці їх сенс; саме в них – таємна сутність
          пізнання:
        </p>
        <div className="Prayer">
          <p>"Коли мене осіняє бардо сутнісної дійсності дгармадгату, </p>
          <p>Я відкину всі думки, сповнені страху та жаху, </p>
          <p>
            Я зрозумію все, що виникає переді мною, є проявом моєї свідомості,
          </p>
          <p>Я впізнаю, що таким є вигляд бардо; </p>
          <p>Зараз, цієї рішучої миті, </p>
          <p>Я не злякаюсь мирних і гнівних облич – моїх же проявів."</p>
        </div>
        <p>
          Іди вперед, промовляючи ці слова чітко й ясно, та пам’ятай їхній
          зміст. Не забувай їх, бо в цьому таємна сутність: упевнено пізнавати,
          що все, що наразі виникає, навіть, якщо воно жахає, є твоє ж
          відображення.
        </p>

        <img src={mirrors} alt="Mirrors" />
        <div className="PhotoBy">
          Photo by{" "}
          <a href="https://unsplash.com/@thebarlemy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Barthelemy de Mazenod
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/uogMShrLlhU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>
    </div>
  );
}
