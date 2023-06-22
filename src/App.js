import React, { useEffect } from "react";
import "./index.scss";
import "macro-css";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [fav, setFav] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get(`https://639791f877359127a03b11c8.mockapi.io/items`)
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get(`https://639791f877359127a03b11c8.mockapi.io/cart`)
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get(`https://639791f877359127a03b11c8.mockapi.io/favorites`)
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);
  const onAddToCart = (ob) => {
    axios.post(`https://639791f877359127a03b11c8.mockapi.io/cart`, ob);

    setCartItems([...cartItems, ob]);
  };
  const onFavorite = (ob) => {
    if (favorites.find(ob.id === ob.id)) {
      axios.delete(
        `https://639791f877359127a03b11c8.mockapi.io/favorites/${ob.id}`
      );
      setFavorites((prev) => prev.filter((item) => item.id !== ob.id));
    } else {
      axios.post(`https://639791f877359127a03b11c8.mockapi.io/favorites`, ob);

      setFavorites([...favorites, ob]);
    }
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://639791f877359127a03b11c8.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header
        onClickCart={() => setCartOpened(true)}
        onClickFavorites={() => setFav(true)}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onFavorite={onFavorite}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        {/* <Route exact path="/" element={<Header />}> */}
        <Route
          exact
          path="favorites"
          element={
            fav && <Favorites items={favorites} onAddToFavorite={onFavorite} />
          }
        ></Route>
        {/* </Route> */}
      </Routes>

      {/* {fav && <Favorites items={favorites} />} */}
    </div>
  );
}

export default App;
