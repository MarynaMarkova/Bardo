import BARDO1_1 from "./BARDO1_1";
import BARDO1_2 from "./BARDO1_2";
import BARDO2_1 from "./BARDO2_1";
import BARDO2_2 from "./BARDO2_2";
import BARDO2_3 from "./BARDO2_3";
import BARDO3_1 from "./BARDO3_1";
import BARDO3_2 from "./BARDO3_2";
import BARDO3_3 from "./BARDO3_3";
import BARDO3_4 from "./BARDO3_4";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <BARDO1_1 />
        <BARDO1_2 />
        <BARDO2_1 />
        <BARDO2_2 />
        <BARDO2_3 />
        <BARDO3_1 />
        <BARDO3_2 />
        <BARDO3_3 />
        <BARDO3_4 />

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
