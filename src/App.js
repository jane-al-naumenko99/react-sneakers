function App() {
  return (<div className="wrapper clear"> 
 <header className="d-flex justify-between align-center p-40"> 
    <div className="d-flex align-center"> 
      <img width="40" height="40" src="/img/logo.png" alt="Logo" />
        <div className="headerInfo"> 
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
    </div>
    <ul className="d-flex">
      <li className="mr-30"> <img width="18" height="18" src="/img/cart.svg" alt="" /> <span>1205 руб.</span> </li>
      <li className="mr-30">  <img width="18" height="18" src="/img/favorites.svg" alt="" /> <span> Избранное</span> </li>
      <li className="mr-30"> <img width="18" height="18" src="/img/account.svg" alt="" /> <span> Личный кабинет</span> </li>
    </ul>
 </header>

   <div className="content p-40">
      <h1 className="mb-40">Все кроссовки</h1>

      <div className="d-flex flex-wrap"> 
      <div className ="card"> 
        <button className="button favorite"> <img src="/img/heart.svg" alt="Heart" /> </button>
        <img width="133" height="112" src="/img/sneakers/1.jpg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="cardBottom d-flex justify-between align-center"> 
          <div className="cardPrice d-flex flex-column"> 
            <p> Цена: </p>
            <b> 12 999 </b> 
            </div>
            <button className="button"> <img width="11" height="11" src="/img/plus.svg" alt="Plus" /> </button>
          </div>
        </div>
      <div className ="card"> 
        <button className="button favorite"> <img src="/img/heart.svg" alt="Heart" /> </button>
        <img width="133" height="112" src="/img/sneakers/2.jpg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="cardBottom d-flex justify-between align-center"> 
          <div className="cardPrice d-flex flex-column"> 
            <p> Цена: </p>
            <b> 12 999 </b> 
            </div>
            <button className="button"> <img width="11" height="11" src="/img/plus.svg" alt="Plus" /> </button>
          </div>
        </div>
      <div className ="card"> 
        <button className="button favorite"> <img src="/img/heart.svg" alt="Heart" /> </button>
        <img width="133" height="112" src="/img/sneakers/3.jpg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="cardBottom d-flex justify-between align-center"> 
          <div className="cardPrice d-flex flex-column"> 
            <p> Цена: </p>
            <b> 12 999 </b> 
            </div>
            <button className="button"> <img width="11" height="11" src="/img/plus.svg" alt="Plus" /> </button>
          </div>
        </div>
      <div className ="card"> 
        <button className="button favorite"> <img src="/img/heart.svg" alt="Heart" /> </button>
        <img width="133" height="112" src="/img/sneakers/4.jpg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="cardBottom d-flex justify-between align-center"> 
          <div className="cardPrice d-flex flex-column"> 
            <p> Цена: </p>
            <b> 12 999 </b> 
            </div>
            <button className="button"> <img width="11" height="11" src="/img/plus.svg" alt="Plus" /> </button>
          </div>
        </div>
      </div>
      </div>
    </div>

  );
}

export default App;
