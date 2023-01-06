// import RandomNuber from "./RandomNumber";
// import FullBardo1_1 from "./FullBardo1_1";
import Piece15 from "./Piece15";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Piece15 />
        {/* <FullBardo1_1 /> */}
        {/* <RandomNuber /> */}
        <div className="Author">
          Падмасамбгава — Настанови й молитви «Книги Великого Визволення»
        </div>
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
          Photo by{" "}
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
