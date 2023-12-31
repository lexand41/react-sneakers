import { useState } from "react";
import styles from "./Card.module.scss";

function Card({ favorit, onFavorite, title, imageUrl, price, onPlus }) {
  const [isAdded, setIsSdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsSdded(!isAdded);
  };

  const favorite = favorit
    ? "/img/heart-liked.svg"
    : "/img/heart-unliked.svg";
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src={favorite} alt="Liked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
