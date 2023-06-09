import React from "react";
import styles from "./Button.module.scss";

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className={styles["button"]}>
    {children}
  </button>
);

export default Button;
