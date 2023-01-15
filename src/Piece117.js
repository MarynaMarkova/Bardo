import React from "react";
import Horses from "./img/Horses.jpg";

export default function Piece117() {
  return (
    <div className="Piece117">
      <h1>Частина III </h1>
      <h2>День 39</h2>
      <h3>3.</h3>

      <p>
        Якщо тобі доведеться народитися на західному континенті, що звуть
        «Насолода корів, які виконують бажання», ти побачиш озеро прикрашене
        конями й кобилами.{" "}
      </p>
      <p>Не кидайся туди, повернися назад. </p>
      <p>
        Хоча в цьому місці рясні насолоди, Вчення Будди не процвітає там, тому
        не вступай туди.
      </p>

      <img className="img-fluid" src={Horses} alt="Horses" />
    </div>
  );
}
