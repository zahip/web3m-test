import React from "react";
import Card from "../shared/Card/Card";
import styles from "./ItemDetails.module.scss";

function ItemDetails({ item }) {
  return (
    <div className={styles["item-details-container"]}>
      <Card>card</Card>
    </div>
  );
}

export default ItemDetails;
