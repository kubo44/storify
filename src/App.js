import { useState } from "react";
import "./App.css";
import { Spielfigur } from "./Spielfigur";
import Aaa from "./Introduction";
import Vorstelung from "./Vorstelung";
import Menu from "./Menu";

function App() {
  const [article, setArticle] = useState("spielfigur");

  return (
    <div>
      <Menu setArticle={setArticle} />
      <header>
        <img src="daisy.webp" alt="logo" height="200px" />
      </header>
      {article === "spielfigur" && <Spielfigur />}
      {article === "vorstelung" && <Vorstelung />}
      {article === "introduction" && <Aaa />}
    </div>
  );
}

export default App;
