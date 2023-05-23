import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./Dialog.module.scss";

const Dialog = ({ title, open, setOpenDialog }) => {
  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles["AlertDialogOverlay"]} />
        <AlertDialog.Content className={styles["AlertDialogContent"]}>
          <AlertDialog.Title className={styles["AlertDialogTitle"]}>
            {title}
          </AlertDialog.Title>
          <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
            <button onClick={setOpenDialog} className={`${styles["Button"]}`}>
              OK
            </button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default Dialog;
