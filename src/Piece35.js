import React from "react";
import Thunder1 from "./img/Thunder1.jpg";

export default function Piece35() {
  return (
    <div className="Piece35">
      <h1>Частина I </h1>
      <h2>День 12</h2>
      <h3>2.</h3>
      <div>
        <p>
          Із глибини світла прийде природний звук Істини, немов гуркіт тисячі
          громів. Він катиться й гуркотить, і відображається в бойовому кличі та
          пронизливому звучанні гнівних мантр.
        </p>
        <p>Не бійся його, не прямуй геть.</p>
        <p> Пізнай його як гру твого ж розуму, як власний прояв.</p>

        <div className="FourLights">
          <img src={Thunder1} alt="Thunder1" />
        </div>
      </div>
      <div className="PhotoBy">
        Photo by{" "}
        <a href="https://unsplash.com/@cooper_baumgartner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Cooper Baumgartner
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/images/nature/thunderstorm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </div>
  );
}
