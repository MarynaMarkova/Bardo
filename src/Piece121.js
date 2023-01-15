import React from "react";
import Shalashnik from "./img/Shalashnik.jpg";

export default function Piece121() {
  return (
    <div className="Piece121">
      <h1>Частина III </h1>
      <h2>День 41</h2>
      <h3>1.</h3>

      <p>
        Якщо тобі доведеться народитися твариною, ти побачиш нібито крізь туман
        печери в скелях, нори в землі й солом’яні хатинки.
      </p>
      <p>Не вступай туди.</p>

      <img className="img-fluid" src={Shalashnik} alt="Shalashnik" />
    </div>
  );
}
