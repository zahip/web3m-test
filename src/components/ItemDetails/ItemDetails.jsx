import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Card from "../shared/Card/Card";

import styles from "./ItemDetails.module.scss";

function ItemDetails({ item, handleClick }) {
  console.log(item);
  const { name, color } = item;
  return (
    <div className={styles["item-details-container"]}>
      <Card>
        <div className={styles["item-details-top"]}>
          <div
            className={styles["title-wrapper"]}
            style={{ backgroundColor: color }}
          >
            <span>{name}</span>
          </div>
          <span
            className={styles["remove-btn"]}
            onClick={() => handleClick(item)}
          >
            <XCircleIcon aria-hidden="true" />
          </span>
        </div>
      </Card>
    </div>
  );
}

export default ItemDetails;
