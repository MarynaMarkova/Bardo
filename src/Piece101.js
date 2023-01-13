import React from "react";
import BuddhaLono from "./img/BuddhaLono.jpg";

export default function Piece101() {
  return (
    <div className="Piece101">
      <h1>Частина III </h1>
      <h2>День 34</h2>
      <h3>2.</h3>

      <p>Настав час зачинити брами лона. </p>

      <p>Сказано: </p>
      <div className="Prayer">
        <p>Зачини брами лона та міркуй про протидію, </p>

        <p>Прийшов час, коли потрібні стійкість і чиста думка.</p>
      </div>

      <img className="img-fluid" src={BuddhaLono} alt="BuddhaLono" />
    </div>
  );
}
