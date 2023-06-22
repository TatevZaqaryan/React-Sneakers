import React, { useState } from "react";
import styles from "./card.module.scss";
function Card({
  id,
  title,
  imgUrl,
  price,
  onPlus,
  onFavorite,
  favorite = false,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);

  function onClickPlus() {
    onPlus({ title, imgUrl, price });
    setIsAdded(!isAdded);
  }
  function onClickFavorite() {
    onFavorite({ id, title, imgUrl, price });
    setIsFavorite(!isFavorite);
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={imgUrl} alt="Sneakers" />
      <h5> {title}</h5>

      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Cena:</span>
          <b>{price}</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={11}
          height={11}
          src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}
export default Card;
