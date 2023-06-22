import React from "react";
import Card from "../card/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onFavorite,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align center justify-between mb-40">
        <h1>
          {" "}
          {searchValue
            ? `vse kroccovokvse kroccovok ${searchValue}`
            : "vse kroccovok"}{" "}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="search"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Poisk"
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj, i) => (
            <Card
              key={i}
              title={obj.name}
              imgUrl={obj.imageUrl}
              price={obj.price}
              onPlus={(ob) => {
                onAddToCart(ob);
              }}
              onFavorite={(ob) => onFavorite(ob)}
            />
          ))}
      </div>
    </div>
  );
}
export default Home;
