import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import blog from "../../blog";

function ArticlesList() {
  return (
    <div className={styles.posts_wrapper}>
      <h2 className={styles.posts_heading}> Latest posts</h2>
      <ul className={styles.list_container}>
        {blog.map((elem, ind) => {
          return (
            <li key={ind} className={styles.list_item}>
              <Link to={"/blog/" + elem.id}>{elem.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticlesList;
