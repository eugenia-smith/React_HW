import { useState } from "react";
import styles from "./styles.module.css";

function Rating() {
  const [ratingValue, setRatingValue] = useState("");

  function countRating(event) {
    setRatingValue(event.target.value);
  }

  const ratingList = [
    "https://yandex-images.clstorage.net/BfZd98401/dfc16eLh/cZTUDRgvoewTiP3kvhMHnZsi808IyapXqWRJFK9zzP0iG0GryiX7oshLXPpyAvL5VlWfrLpElJ2VhytuQN1WIJHA5AlM65X9xt355Vr3x-0LYwf-3EmuJmxE-GUfBiiowquU26zWOfCaKJ5sBcDVHvdky_0r4bFNkNbKjyTe5eGB5fY_-OyxqrP7PXAcsHQsyGLXz3hojhf-VuhSPFWbXePugI3vV0uBylmtrwRS1h-0Vqm7-EHh_MDUXQ9EnIT2oXUlTDgeIZvB6_wynzFkbJkTJs87m2x0P5VaQn_WyQwS3CG8XXepMprZnN11EOVNF1U6SVtSAxyRphzc9M40NZDHlW6rXdKaAkjtcA8Tpvx44vYNCZj-9cxXqSHsVit8MHwDr-_F-IJZqH0fpSJ2rxUF-Nn5AqDvIwZefxUtNwfxlRTe230hqVD5P5Lv0AYuWfPUnGo6rcfNt-rDv5XpnQBsAMwsZRrSSLoMzQUz1852NqnamoEgLODmDS8UHcUW0TfnPqh8oJmRaOyzToHXzHjQZMxLmGxGDgTow2xlaU3wHgG9Pqe4wZrrXD9VYGQulYUbC5hg400A9b4OFM30paLFB4_7PmKpYYqMM_zT5P7ZExQNGKgdN551q7GuRGuf8j7xbL9kmJJrWAwup3DH7TW3Wcl7MiCuwuQfXNavhAeixyaOqi_jm_GbncPMk9e9e_I3bToKDufetZgDXDe7vOD8gkwcJriS6qtcHETQ107EB9m5eqMSL6C1XKx3DcZ1MZfGDGs8MJjS-_yTDzI23_mDFY-ZuF-3_RSIAxxkmqwRDTFsvFX4sMqqP51GIkU85rbYyJvgsL6SdZ3s5b-091IXZ19JDiFYI6pMwyyDd85KQ6deqvmPNxy1WwAeNdlMAqxQzq51a6Dquv5etRLkzRSlWSs4E0KMUFe-rYQvBreyJpa9Ga2R2eNp_1E8k7eve-E3vuqonrcf5jngP_bKk",

    "https://sun9-28.userapi.com/impf/c855436/v855436801/d69a5/8TdLk-8oMHA.jpg?size=1161x913&quality=96&sign=fc8537d8437b1421872208ca5e29fc8a&c_uniq_tag=3sdCGa_KUxOtSRVS5RNDFGr77OoKVRi8MwqGagANG1E&type=album",

    "https://banner2.kisspng.com/20181128/uct/kisspng-galatasaray-s-k-dream-league-soccer-uefa-champion-yldz-clipart-ourclipart-5bff31fccd2c99.8288298815434511328404.jpg",

    "https://www.pngall.com/wp-content/uploads/4/5-Star-Rating-PNG.png",
  ];

  return (
    <div className={styles.container}>
      <img className={styles.stars} src={ratingList[ratingValue]} />

      <button className={styles.button} value="0" onClick={countRating}>
        Bad
      </button>
      <button className={styles.button} value="1" onClick={countRating}>
        Average
      </button>
      <button className={styles.button} value="2" onClick={countRating}>
        Good
      </button>
      <button className={styles.button} value="3" onClick={countRating}>
        Excellent
      </button>
    </div>
  );
}

export default Rating;
