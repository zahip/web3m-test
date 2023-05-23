import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import styles from "./MultiSelectDropbox.module.scss";

export default function MultiSelectDropbox({
  dataList,
  handleClick,
  placeholderText,
}) {
  return (
    <div className={styles["dropox-wrapper"]}>
      <Listbox>
        {({ open }) => {
          return (
            <div className={styles["listbox-button-wrapper"]}>
              <Listbox.Button className={styles["list-button"]}>
                <span className={styles["button-name"]}>{placeholderText}</span>
                <span className={styles["button-icon-container"]}>
                  {open ? (
                    <ChevronUpIcon
                      className={styles["button-icon"]}
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className={styles["button-icon"]}
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options static className={styles["listbox-options"]}>
                  {dataList.map((item) => (
                    <Listbox.Option
                      key={item.id}
                      className={styles["listbox-option"]}
                      value={item}
                      onClick={() => handleClick(item)}
                    >
                      <div className={styles["name-wrapper"]}>
                        <span>{item.name}</span>
                        <span className={styles["dashed-wrapper"]}>
                          <hr className="dashed" />
                        </span>
                        <span className={styles["icon-container"]}>
                          {/* <FontAwesomeIcon icon={faCarrot} /> */}
                        </span>
                      </div>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          );
        }}
      </Listbox>
    </div>
  );
}
