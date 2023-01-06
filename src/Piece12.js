import React from "react";
import nerves from "./img/nerves.jpg";

export default function Piece12() {
  return (
    <div className="Piece12">
      <h1>Частина I </h1>
      <h2>День 4</h2>
      <h3>3.</h3>
      <div>
        <p>
          О дитино шляхетного роду, якщо ти не пізнаєш, що це твої же прояви,
          якою би медитацією ти не займалася за життя – якщо ти не зустрінеш те,
          чому навчилася, кольори налякають тебе, звуки введуть у сум’яття й
          промені світла збентежать тебе.
        </p>
        <p>
          Не зрозумівши таємної сутності Вчення, ти не пізнаєш звуки, кольори й
          промені та блукатимеш у самсарі.
        </p>

        <img src={nerves} alt="nerves" />
        <div className="PhotoBy">
          Photo by{" "}
          <a href="https://unsplash.com/@mittaluday?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Uday Mittal
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/bwKtz4YVtmA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>
    </div>
  );
}
