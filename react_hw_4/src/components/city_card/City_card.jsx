import { useState } from "react";
import styles from "./styles.module.css";

function CityCard(props) {
  if (props.cityData === "") {
    return <p>Город не выбран</p>;
  }

  return (
    <>
      <div>
        <h3 className={styles.city_title}>{props.cityData.name}</h3>
        <picture className={styles.city_img}>
          <img src={props.cityData.imageUrl} alt="" />
        </picture>
        <p className={styles.city_description}>{props.cityData.description}</p>
        <ul className={styles.facts_container}>
          {props.cityData.facts.map((fact) => {
            return (
              <li className={styles.city_facts} key={fact}>
                {fact}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default CityCard;
