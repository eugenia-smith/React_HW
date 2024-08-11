import { useState } from "react";
import styles from "./styles.module.css";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  function renderList(event) {
    setPeople((people) =>
      people.filter((elem, index) => {
        return elem.id !== parseInt(event.target.value);
      })
    );
  }

  return (
    <div>
      <ul className={styles.list}>
        {people.map((elem) => {
          return (
            <li className={styles.personal_card} key={elem.id}>
              <p>{elem.name}</p>
              <p>{elem.age}</p>
              <button
                className={styles.remove_button}
                value={elem.id}
                onClick={renderList}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
