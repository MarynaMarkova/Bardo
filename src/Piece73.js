import React from "react";
import Monks from "./img/Monks.jpg";

export default function Piece73() {
  return (
    <div className="Piece73">
      <h1>Частина III </h1>
      <h2>День 25</h2>
      <h3>1.</h3>

      <p> У тантрі сказано: </p>

      <div className="Prayer">
        <p>
          З попереднім і майбутнім тілом бардо поставання/переродження (сіпа
          бардо),
        </p>
        <p>Яке обдароване всіма почуттями, безперешкодно мандрує, </p>
        <p>Володіє дивовижною силою, що обумовлена кармою,</p>
        <p>Видиме чистими очима богів, які мають таку саму природу.</p>
      </div>

      <p>
        О дитино шляхетного роду, слова «видиме чистими очима богів, які мають
        таку саму природу» означають, що ті, кому доведеться народитись у світі
        однієї і тієї же природи, побачать один одного в стані бардо, тому ті,
        кому призначено народитись богами, побачать один одного.{" "}
      </p>

      <p>
        Так само, якщо їм доведеться народитись у будь-якому з шести світів,
        вони побачать тих, хто має таку саму природу.{" "}
      </p>

      <p>Не кидайся до них та медитуй на Володаря Великого Співчуття. </p>

      <p>
        Бачення «чистими очима богів» означає й бачення чистими божественними
        очима споглядачів, що перебувають у самадгі, а не просто досягли стану
        богів своїми заслугами. Та вони бачать не завжди: зосередившись на
        баченні – бачать; якщо ж ні, або якщо їх медитацію порушено – тоді не
        бачать.
      </p>

      <img className="img-fluid" src={Monks} alt="Monks" />
    </div>
  );
}
