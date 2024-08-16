import Social from "../social";
import styles from "./style.module.scss";
import spotify_logo from "../../assets/spotify_logo_icon.svg";

function Box() {
  return (
    <section className={styles.banner}>
      <picture className={styles.logo}>
        <img src={spotify_logo} alt="spotify logo" />
      </picture>
      <Social />
    </section>
  );
}

export default Box;
