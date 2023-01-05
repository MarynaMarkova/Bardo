import React from "react";

export default function RandomNumber() {
  let num = Math.floor(Math.random() * 10 + 1);

  switch (num) {
    case 1:
      return "first piece";
      break;
    case 2:
      return "second piece";
      break;
    case 3:
      return "third piece";
      break;
    case 4:
      return "fourth piece";
      break;
    case 5:
      return "fifth piece";
      break;
    case 6:
      return "sixth piece";
      break;
    case 7:
      return "seventh piece";
      break;
    case 8:
      return "eighth piece";
      break;
    case 9:
      return "ninth piece";
      break;
    case 10:
      return "tenth piece";
      break;
  }
}
