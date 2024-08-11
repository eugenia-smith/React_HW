import { useState } from "react";
import styles from "./styles.module.css";
import CityCard from "../city_card/City_card";

function CitySelector(props) {
  const citiesData = [
    {
      name: "Токио",
      description:
        "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
      imageUrl:
        "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
      facts: [
        "Токио - самый населенный мегаполис в мире.",
        "Здесь расположена самая высокая башня в Японии - Токийская башня.",
        "В Токио проходят множество культурных событий и фестивалей.",
      ],
    },

    {
      name: "Киото",
      description:
        "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
      imageUrl:
        "https://images.ctfassets.net/bth3mlrehms2/1i0vZWcD587SaN9Udo6sf5/3e7942cfe677bb4ca1116085b93b009c/Japan_Kyoto_Stra__e.jpg?w=3863&h=2172&fl=progressive&q=50&fm=jpg",
      facts: [
        "В Киото насчитывается более 1600 буддийских храмов.",
        "Этот город был столицей Японии более тысячи лет.",
      ],
    },

    {
      name: "Осака",
      description:
        "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bNmtFt7SlKEWIYcOxnsBNkTN94JyJbrQHQ&s",
      facts: [
        "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
        "Город является кулинарной столицей Японии.",
      ],
    },

    {
      name: "Хоккайдо",
      description:
        "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
      imageUrl:
        "http://i1.wallbox.ru/wallpapers/main2/202201/nebo-ozero-gory-aponia-hokkajdo-asahi.jpg",
      facts: [
        "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
        "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
      ],
    },

    {
      name: "Нагоя",
      description:
        "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
      imageUrl:
        "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",
      facts: [
        "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
        "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
      ],
    },
  ];

  function chooseCity(event) {
    const city = event.target.value;

    if (city === "") {
      props.info("");
    } else {
      const targetCityData = citiesData.find((elem) => {
        return elem.name === city;
      });

      props.info(targetCityData);
    }
  }

  return (
    <div className={styles.form_wrapper}>
      <h3>Выберете город</h3>
      <select className={styles.select_field} onChange={chooseCity}>
        <option value=""></option>
        {citiesData.map((elem) => {
          return <option key={elem.name}>{elem.name}</option>;
        })}
        {/* <option value="Токио">Токио</option>
        <option value="Киото">Киото</option>
        <option value="Осака">Осака</option>
        <option value="Хоккайдо">Хоккайдо</option>
        <option value="Нагоя">Нагоя</option> */}
      </select>
    </div>
  );
}

export default CitySelector;
