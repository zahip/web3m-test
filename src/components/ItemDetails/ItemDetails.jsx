import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Slider from "../shared/Slider/Slider";

import Card from "../shared/Card/Card";

import styles from "./ItemDetails.module.scss";

function ItemDetails({ item, handleClick, setSelectedList }) {
  const { name, color, quantity, stock, id } = item;

  const handleChange = (num) => {
    if (num <= stock) {
      setSelectedList((prevSelectedList) => ({
        ...prevSelectedList,
        [id]: { ...item, quantity: num },
      }));
    }
  };
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
        <div className={styles["item-details-middle"]}>
          <div className={styles["quantity-container"]}>
            <span>Select quantity</span>
            <div className={styles["input-container"]}>
              <input
                value={quantity}
                onChange={(e) => handleChange(+e.target.value)}
              />
              <span> KG</span>
            </div>
          </div>

          <div className={styles["slider-container"]}>
            <Slider
              maxRange={stock}
              value={quantity}
              handleChange={(num) => handleChange(num[0])}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ItemDetails;
