import React from "react";
import vajrochana from "./img/vajrochana.jpg";

export default function Piece14() {
  return (
    <div className="Piece14">
      <h1>Частина I </h1>
      <h2>День 5</h2>
      <h3>2.</h3>
      <div>
        <p>
          Весь простір засяє синім світлом, і перед тобою з’явиться з
          центрального Царства Всепроникаючого Кола Благословенний Вайрочана.
          Його тіло білого кольору, він сидить на лев'ячому троні, тримаючи в
          руці колесо з вісьмома спицями та обіймає дружину – Володарку
          Діамантового Простору.
        </p>
        <p>
          З серця Вайрочани та його дружини прийде до тебе синє світло скандги
          свідомості в його первісній чистоті, прийде мудрість простору Дгарми –
          світла, ясна, різка й блискуча, простромить тебе сяйвом, нестерпним
          для очей.
        </p>
        <div className="Blue">
          <img src={vajrochana} alt="vajrochana" />
        </div>
      </div>
    </div>
  );
}
