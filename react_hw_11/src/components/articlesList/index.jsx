import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import blog from "../../blog";

function ArticlesList() {
  return (
    <ul className={styles.list_container}>
      {blog.map((elem, ind) => {
        return (
          <li key={ind} className={styles.list_item}>
            <Link to={"/blog/" + elem.id}>{elem.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticlesList;
