function Menu({ setArticle }) {
  function handleClick(article) {
    setArticle(article);
    console.log(article);
  }
  return (
    <div>
      <button onClick={()=>handleClick("spielfigur")}>Spielfigur</button>
      <button onClick={()=>handleClick("vorstelung")}>Vorstelung</button>
      <button onClick={()=>handleClick("introduction")}>Introduction</button>
    </div>
  );
}

export default Menu;
