// import RandomNuber from "./RandomNumber";
// import BARDO3_3 from "./BARDO3_3";
// import Meditations from "./Meditations";
import Piece141 from "./Piece141";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Piece141 />
        {/* <BARDO3_3 /> */}
        {/* <Meditations /> */}
        {/* <RandomNuber /> */}
        <div3 className="Author">
          Падмасамбгава — Настанови й молитви «Книги Великого Визволення»
        </div3>
      </div>
      <footer>
        <p>
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
        </p>
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
