import React from "react";
import PadmasambhavaYabYum from "./img/PadmasambhavaYabYum.jpg";

export default function Piece102() {
  return (
    <div className="Piece102">
      <h1>Частина III </h1>
      <h2>День 34</h2>
      <h3>3.</h3>

      <p>
        О дитино шляхетного роду, в цей час з’являться образи чоловіків і жінок,
        які кохають один одного.{" "}
      </p>

      <p>
        Коли ти їх побачиш, не вступай у простір між ними, але пам’ятай, що
        потрібно медитувати на чоловіка й жінку, як на Ґуру та його дружину.
      </p>

      <p>
        Подумки схились перед ними, принеси дари з глибоким благоговінням і
        попроси настанов; якщо ти сильно зосередишся на цій думці, брами лона
        безсумнівно зачиняться.
      </p>

      <img
        className="img-fluid"
        src={PadmasambhavaYabYum}
        alt="PadmasambhavaYabYum"
      />
    </div>
  );
}
