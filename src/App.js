import RandomNuber from "./RandomNumber";
// import BARDO3_4 from "./BARDO3_4";
// import Meditations from "./Meditations";
// import Piece108 from "./Piece108";
import mandala from "./img/mandala.jpeg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <a
        href="https://marynamarkova.github.io/bardo-ua/"
        className="icon"
        title="Go Home"
      >
        <i class="fa-solid fa-house"></i>
      </a>
      <div className="Container">
        <div className="Logo">
          <img className="img-fluid" src={mandala} alt="mandala" />
        </div>
        {/* <Piece108 /> */}
        {/* <BARDO3_4 /> */}
        {/* <Meditations /> */}
        <div className="Prayer">
          <RandomNuber />
        </div>
        <div3 className="Author">
          <br />
          Падмасамбгава — Настанови й молитви «Книги Великого Визволення»
        </div3>
      </div>
      <footer>
        <span>
          <a
            href="https://github.com/MarynaMarkova/Bardo/tree/master"
            className="profileLink"
            target="_blank"
            rel="noreferrer"
            title="Github code"
          >
            Open-source
          </a>
          {" by "}
          <a
            href="https://marynamarkova.github.io/"
            className="profileLink"
            target="_blank"
            rel="noreferrer"
            title="Personal page"
          >
            Maryna Markova
          </a>
        </span>
        <p className="PhotoBy PhotoInside">
          Photo "Starry Night" by{" "}
          <a href="https://unsplash.com/@weirick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Jake Weirick
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/XL0SE4rtRwg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </footer>
    </div>
  );
}
