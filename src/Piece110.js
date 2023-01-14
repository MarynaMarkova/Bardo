import React from "react";
import WaterDrop from "./img/WaterDrop.jpg";

export default function Piece110() {
  return (
    <div className="Piece110">
      <h1>Частина III </h1>
      <h2>День 37</h2>
      <h3>2.</h3>

      <p>
        Але навіть якщо після цього не зруйнується віра в реальність, не
        зачиняться брами лона й ти ось-ось до нього ввійдеш – є мудра вказівка.
      </p>

      <p>
        О дитино шляхетного роду, навіть якщо після цього не зачинені брами
        лона, їх слід тепер закрити п’ятим способом – медитацією на первісне
        світло.{" "}
      </p>

      <p>Медитацію на первісне світло треба коїти так: </p>

      <div className="Prayer">
        «Все матеріальне – це мій власний розум, і цей розум є порожнеча,
        ненароджена й безперервна».{" "}
      </div>

      <p>
        Міркуючи про це, тримай свій розум у природному й незмінному стані,
        нехай він утримується в своїй власній сутності, мов вода, що налита в
        воду – вільний, відкритий, розслаблений.
      </p>

      <img className="img-fluid" src={WaterDrop} alt="WaterDrop" />
    </div>
  );
}
