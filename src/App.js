function App() {
  return (<div className="wrapper"> 
 <header> 
    <div className="Headerleft"> 
      <svg> </svg>
        <div className="headerInfo"> 
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
    </div>
    <ul className="headerRight">
      <li> <svg /> <span>1205 руб.</span> </li>
      <li>  <svg /> <span> Избранное</span> </li>
      <li> <svg /> <span> Личный кабинет</span> </li>
    </ul>
 </header>

   <div className="content">
      <h1>Все кроссовки</h1>
...

    </div>
  </div>
  );
}

export default App;
