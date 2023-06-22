import React from "react";
import Card from "../card/Card";
function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align center justify-between mb-40">
        <h1>Mои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        <div className="d-flex flex-wrap">
          {console.log(items)}
          {items.map((item, i) => (
            <Card
              key={i}
              {...item}
              onFavorite={onAddToFavorite}
              favorite={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Favorites;
