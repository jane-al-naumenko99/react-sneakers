function App() {
  return (<div className="wrapper"> 
 <header> 
    <div className="Headerleft"> 
      <img width="40" height="40" src="/img/logo.png" alt="Logo" />
      <svg> </svg>
        <div className="headerInfo"> 
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
    </div>
    <ul className="headerRight">
      <li> <img width="18" height="18" src="/img/cart.svg" alt="" /> <span>1205 руб.</span> </li>
      <li>  <img width="18" height="18" src="/img/favorites.svg" alt="" /> <span> Избранное</span> </li>
      <li> <img width="18" height="18" src="/img/account.svg" alt="" /> <span> Личный кабинет</span> </li>
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
