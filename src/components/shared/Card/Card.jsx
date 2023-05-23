import React from "react";
import styles from "./Card.module.scss";

function Card({ children }) {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-container"]}>{children}</div>
    </div>
  );
}

export default Card;
