import styles from "./style.module.scss";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function UserProfile() {
  const [userName, setUserName] = useState("Loading...");
  const [userEmail, setUserEmail] = useState("Loading...");
  const [userPhone, setUserPhone] = useState("Loading...");

  async function getUser() {
    setUserName("Loading...");
    setUserEmail("Loading...");
    setUserPhone("Loading...");

    function getRandomId() {
      return Math.floor(Math.random() * 10 + 1).toString();
    }

    const userURL =
      "https://jsonplaceholder.typicode.com/users/" + getRandomId();

    try {
      const response = await axios.get(userURL);
      const { data } = response;
      setUserName(data.name);
      setUserEmail(data.email);
      setUserPhone(data.phone);
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.container}>
      <article className={styles.user_card}>
        <picture className={styles.user_image}>
          <img
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid"
            alt=""
          />
        </picture>
        <h2 className={styles.user_name}>{userName}</h2>
        <p className={styles.user_email}>{userEmail}</p>
        <p className={styles.user_phone}>{userPhone}</p>
        <button onClick={getUser} className={styles.load_user_btn}>
          Load New User
        </button>
      </article>
    </div>
  );
}

export default UserProfile;
