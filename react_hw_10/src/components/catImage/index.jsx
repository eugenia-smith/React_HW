import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

function CatImage() {
  const [catImg, setCatImg] = useState("");

  async function getCatImg() {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setCatImg(response.data[0].url);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCatImg();
  }, []);

  return (
    <article className={styles.cat_card}>
      <h2 className={styles.cat_heading}>Soft Kitty, warm Kitty</h2>
      <picture className={styles.cat_picture}>
        <img src={catImg} alt="" />
      </picture>
      <button
        onClick={getCatImg}
        className={styles.load_kitty_btn}
        type="button"
      >
        Load more Kitties
      </button>
    </article>
  );
}

export default CatImage;
