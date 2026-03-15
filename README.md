# Rolli Shop — учебный магазин роллов (корзина на vanilla JS)

Небольшой учебный проект интернет‑магазина: каталог роллов + корзина + расчёт суммы и доставки.

## Стек
- HTML, CSS
- JavaScript (DOM, события)
- Bootstrap (вёрстка, сетка, компоненты)

## Функциональность
- Каталог товаров (карточки с количеством и ценой)
- Счётчик количества (+ / −) на карточках и в корзине
- Добавление товара в корзину
- Объединение одинаковых товаров в корзине по `data-id` (увеличение количества вместо дубликатов)
- Пересчёт итоговой суммы заказа
- Расчёт доставки: бесплатно от **600 ₽**, иначе **250 ₽**
- UI‑состояния корзины: “корзина пуста” / показ итогов и формы заказа

## Как запустить
Проект статический, сборка не нужна:
1. Скачайте/клонируйте репозиторий
2. Откройте `index.html` в браузере

## Структура проекта (основное)
- `index.html` — разметка каталога и корзины
- `css/main.css` — стили
- `js/card-02.js` — добавление в корзину + объединение одинаковых товаров
- `js/counter-02.js` — счётчики количества (делегирование событий)
- `js/toggleCartStatus.js` — показ/скрытие блоков корзины
- `js/calcCartPriceAndDelivery.js` — сумма + доставка

## Верстка
https://www.figma.com/design/fw0toTyXMwM1y4WIe0YFrJ/React-Sneakers?node-id=60-209&t=odMBzrHMOonbedn9-0

---
Учебный проект для практики DOM, событий и логики корзины.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

