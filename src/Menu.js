function Menu({ setArticle }) {
  function handleClick(article) {
    setArticle(article);
    console.log(article);
  }
  return (
    <div>
      <button onClick={()=>handleClick("spielfigur")}>Spielfigur</button>
      <button onClick={()=>handleClick("aaa")}>Todo1</button>
      <button onClick={()=>handleClick("bbb")}>Todo2</button>
    </div>
  );
}

export default Menu;
