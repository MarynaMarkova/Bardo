import React from "react";
import Piece1 from "./Piece1";
import Piece2 from "./Piece2";
import Piece3 from "./Piece3";
import Piece4 from "./Piece4";
import Piece5 from "./Piece5";
import Piece6 from "./Piece6";
import Piece7 from "./Piece7";
import Piece8 from "./Piece8";
import Piece9 from "./Piece9";
import Piece10 from "./Piece10";

export default function RandomNumber() {
  let num = Math.floor(Math.random() * 10 + 1);

  switch (num) {
    case 1:
      return <Piece1 />;
      break;
    case 2:
      return <Piece2 />;
      break;
    case 3:
      return <Piece3 />;
      break;
    case 4:
      return <Piece4 />;
      break;
    case 5:
      return <Piece5 />;
      break;
    case 6:
      return <Piece6 />;
      break;
    case 7:
      return <Piece7 />;
      break;
    case 8:
      return <Piece8 />;
      break;
    case 9:
      return <Piece9 />;
      break;
    case 10:
      return <Piece10 />;
      break;
  }
}
