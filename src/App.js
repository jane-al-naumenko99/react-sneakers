import { useState } from 'react';
import sneakers from './data/sneakers';

function Card({ imageUrl, title, price }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="card">
      <button
        className="button favorite"
        onClick={() => setIsFavorite((prev) => !prev)}
        type="button"
      >
        <img src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt="Heart" />
      </button>
      <img width="133" height="112" src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="cardBottom d-flex justify-between align-center">
        <div className="cardPrice d-flex flex-column">
          <p> Цена: </p>
          <b>{price}</b>
        </div>
        <button
          className="button"
          onClick={() => setIsAdded(!isAdded)}
          type="button"
        >
          <img
            width="11"
            height="11"
            src={isAdded ? '/img/green.svg' : '/img/plus.svg'}
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width="40" height="40" src="/img/logo.png" alt="Logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width="18" height="18" src="/img/cart.svg" alt="Cart" /> <span>1205 руб.</span>
          </li>
          <li className="mr-30">
            <img width="18" height="18" src="/img/favorites.svg" alt="Favorites" /> <span> Избранное</span>
          </li>
          <li className="mr-30">
            <img width="18" height="18" src="/img/account.svg" alt="Account" /> <span> Личный кабинет</span>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width="14" height="14" src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="cards-grid">
          {sneakers.map((item) => (
            <Card
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
