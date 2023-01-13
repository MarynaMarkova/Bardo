import React from "react";
import GuruConsort from "./img/GuruConsort.jpg";

export default function Piece103() {
  return (
    <div className="Piece103">
      <h1>Частина III </h1>
      <h2>День 35</h2>
      <h3>1.</h3>

      <p>
        Якщо же брами лона не зачиняться й ти ось-ось увійдеш до лона, медитуй
        на Ґуру та його дружину як на свого їдама або на Володаря Великого
        Співчуття з дружиною й подумки принеси їм дари.{" "}
      </p>
      <p>
        Зі щирим благоговінням попроси їх обдарувати тебе духовними
        досягненнями; це зачинить брами лона.
      </p>

      <img className="img-fluid" src={GuruConsort} alt="GuruConsort" />
    </div>
  );
}
