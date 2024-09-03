import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    inputValue ? setItems([...items, inputValue]) : alert("Invalid item");
    setInputValue("");
  }

  useEffect(() => {
    console.log("Компонент ListItems обновлен");
  }, []);

  return (
    <div className={styles.content_container}>
      <input
        className={styles.content_input}
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        type="text"
        name=""
        id=""
      />
      <button className={styles.add_btn} onClick={addItem} type="button">
        Add
      </button>
      <ul className={styles.content_list}>
        {" "}
        {items.map((elem, ind) => {
          return <li key={ind}>{elem}</li>;
        })}
      </ul>
    </div>
  );
}

export default ListItems;
