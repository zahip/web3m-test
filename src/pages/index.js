import { useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

import MultiSelectDropbox from "@/components/shared/MultiSelectDropbox/MultiSelectDropbox";
import ItemDetails from "@/components/ItemDetails/ItemDetails";

import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Carrot" },
  { id: 3, name: "Melone" },
  { id: 4, name: "Pear" },
  { id: 5, name: "Lemon" },
  { id: 6, name: "Orange" },
  { id: 7, name: "Salad" },
];

export default function Home() {
  const [itemsList, setItemsList] = useState(items);
  const [selectedList, setSelectedList] = useState({});
  const [loading, setLoading] = useState(false);

  const handleClickDropboxItem = async (itemObj) => {
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/products/${itemObj.name.toLowerCase()}`
    );
    const data = await response.json();
    setLoading(false);

    setItemsList((prevItemList) =>
      prevItemList.filter((item) => item.id !== itemObj.id)
    );
    setSelectedList((prevSelectedList) => ({
      ...prevSelectedList,
      [data.id]: { ...data },
    }));
  };

  return (
    <>
      <Head>
        <title>web3m-test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <MultiSelectDropbox
          dataList={itemsList}
          placeholderText="Select to add item to basket"
          handleClick={handleClickDropboxItem}
        />

        {loading && <div>loading...</div>}
        <div className={styles["items-list-card-container"]}>
          {Object.values(selectedList).map((item) => (
            <ItemDetails key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
