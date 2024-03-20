import { useState } from "react";
import "./App.css";
import { Spielfigur } from "./Spielfigur";
import Aaa from "./Aaa";
import Bbb from "./Bbb";
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
      {article === "aaa" && <Aaa />}
      {article === "bbb" && <Bbb />}
    </div>
  );
}

export default App;
